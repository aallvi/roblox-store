import React, { useEffect, useState } from 'react'
import { Loading } from '../components/Loading'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Button } from '../components/Button'
import { urlBack } from '../api'

export const Validar = () => {



  // if( !Cookies.get('payment_id') ) return <Navigate to='/login' /> 


  const [estadoPago, setEstadoPago] = useState({status:'verifying'})

  const [enviarWebsal, setEnviarWebsal] = useState({})




          const validarPago = async () => {

              // const id = localStorage.getItem('payment_id')
              const id = Cookies.get('payment_id')
              // console.log('cookiee',id)
              // Cookies.set('payment_id')

              try {

                  const response = await axios.post(`${urlBack}/api/getPaymentById`,{
                      id
                  })

                  // const customString = JSON.parse(response.data.custom)

                  // console.log('khipu-estado',response.data.status)

                  setEstadoPago( response.data)
                  // setEnviarWebsal({khipu: response.data, websal:customString })

                  if(response.data.status != "verifying" ){

                      // console.log('enviar websal', {khipu:response.data, websal: JSON.parse(response.data.custom)})


                      return true

                  }

                  
              } catch (error) {

                  console.log(error)
                  
              }



          }


          const llamada =  () => {
              
              let intervalID = setInterval(async () => {

                  const status =  await validarPago()

                  // console.log('status',status)

                if (status ) {
                  clearInterval(intervalID); // Stop the interval if the condition holds tru

                  localStorage.clear()
                  
                }

              }, 1000);

              
          }

          useEffect(() => {

              llamada()
          }, []);


       const enviarWhatsapp = () => {

        // Cookies.remove()
     
        window.open('https://wa.me/56962121886', '_blank');
       }



    
  return (
    <div>

{
                estadoPago.status === 'verifying' 
                ?   <div>

                          <h1 className='text-center' >Estamos validando tu pago</h1>
                          <h1 className='text-center' >Porfavor no recarges la pagina</h1>
                
                    <div>
          
                        <Loading/>
          
                    </div>
                  
              </div>



                : estadoPago.status === 'done' ? 
                 <div className='' >
                           <h1 className='text-center' >Pago finalizado con exito</h1> 
                           <h1 className='text-center'>Recibiras un comprobante en el email ingresado</h1> 
                           <h1 className='text-center'>Porfavor, contactanos por whatsapp para coordinar la entrega</h1> 
                            
                          <div className='contenedorPagoCompletado' >

                          <Button text='Solicitar Producto' fn={enviarWhatsapp} />

                          </div>

                          
                </div> 

                : 
                <div className='contenedorPagoNoCompletado' >
                     <h1 className='text-center' > El pago no se pudo completar, intentalo denuevo. </h1>

                  
                </div>  


               }

    </div>
  )


  
  return (
    <div>

          <h1 className='text-center' >Estamos validando tu pago</h1>
          <h1 className='text-center' >Porfavor no recarges la pagina</h1>

          <div>

            
              <Loading/>



          </div>
        
    </div>
  )
}
