import React, { useState } from 'react'
import {useFormik, Field, Form, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { Button } from '../components/Button'
import { useEffect } from 'react'
import { getbanks } from '../khipu/khipu'
import axios from 'axios'
import Cookies from 'js-cookie'
import { urlBack } from '../api'

export const Pagar = () => {

  const {carrito} = useSelector( (state) => state.app  )
  console.log(carrito,'carrito')

  let aPagar = carrito.reduce((acumulador, actual) => acumulador + actual.total, 0);

  const [bancos, setBancos] = useState([])

  const [clientData, setClientData] = useState({})

  console.log(clientData)

  const getBanks = async () => {
     
    try {
      
      const response = await axios.get(`${urlBack}/api/getBanks`)

      console.log(response.data.banks)

      setBancos(response.data.banks)



    } catch (error) {
      console.log(error)
      
    }

  }

  useEffect(() => {
 
    getBanks()

  }, [])

  const createPayment = async (email,banco,celular) => {
  
    const asunto = `${email}-${celular}`

    const monto = aPagar

    const custom = carrito

    try {
      console.log({asunto, monto, custom:JSON.stringify(custom), bank_id:banco, email:email})
      
      const response = await axios.post(`${urlBack}/api/createPayment`, {asunto, monto, custom:JSON.stringify(custom), bank_id:banco, email:email})

 
    //  return
      if( response.data.payment_id ){
  
        // localStorage.setItem('payment_id', response.data.payment_id)

        Cookies.set('payment_id', response.data.payment_id, { expires: 0.125 })
        console.log('redirigiendo...')
    
        window.location.href = response.data.simplified_transfer_url



    }

    } catch (error) {
      console.log(error)
    }
  }
  



  return (
    <div className='containerCarrito' >

        <h1>Pago online con Khipu</h1>

        <Formik className=''
            initialValues={{ email: '', emailConfirm:'', celular:'', banco:'' }}
            onSubmit={values => createPayment(values.email, values.banco, values.celular)}
            validationSchema={Yup.object({
              email:          Yup.string().email('Ingresa email valido').required('Requerido'),
              celular:          Yup.string('Ingresa celular valido').required('Requerido'),
              emailConfirm:   Yup.string().email('Ingresa email valido').oneOf([Yup.ref("email"), null], "Email deben ser iguales").required('Requerido'),
              banco:   Yup.string().required('Requerido')

    
            })}
        >
     {({ handleChange, handleBlur, handleSubmit, values }) => (

        <Form className='containerForm'>

             <label  > Celular </label>
             <Field  name="celular" type="text" />
             <ErrorMessage  name="celular" component='span' />

             <label  > Email </label>
             <Field  name="email" type="text" />
             <ErrorMessage  name="email" component='span' />


             <label  > Confirmar email </label>
             <Field  name="emailConfirm" type="text" />
             <ErrorMessage  name="emailConfirm" component='span' />

             <label  className='' > Elige banco</label>
      
              <Field  name="banco" as="select" >
              <option value="">Banco... </option>

                {
                   bancos.length > 0 && bancos.map( (item) => (
                     
                           <option key={item.bank_id} value={item.bank_id} >{item.name}</option>
                     
                    ) )
                }
              
              </Field>
              <ErrorMessage  name="banco" component='span' />


             <p className='text-center bold mt-10 text-3xl font-bold underline ' > Total: ${aPagar} </p>


             <Button text='Ir al pago' type='submit'  />
             {/* <button type='submit' > asdasd</button> */}

             <img width='150'src="https://www.khipu.com/wp-content/uploads/2022/03/08-Khipu-200x75-1.svg"></img>



        </Form>

     )}

   </Formik>


    </div>
  )
}
