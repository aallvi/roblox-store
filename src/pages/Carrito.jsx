import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eliminarProducto } from '../store/slices/appSlice'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

export const Carrito = () => {

  const {carrito} = useSelector( (state) => state.app  )
  const dispatch = useDispatch()

  let navigate =  useNavigate()

  const irInicio = () => {

    navigate('/')
  }

  console.log(carrito,'carrito')

  const eliminar = (id) => {

    dispatch(eliminarProducto({id}))
  }

  let reduce = carrito.reduce((acumulador, actual) => acumulador + actual.cantidad, 0);


  let aPagar = carrito.reduce((acumulador, actual) => acumulador + actual.total, 0);

console.log(reduce)

  return (
    <div className='containerCarrito' >


      <h1 >Carrito de robux</h1>

      {
        carrito.length > 0 ?
          <>
            <div className='contenedorProductosCarrito' >

  {
    carrito.map( item => (
      <div className='cardCarrito'>


        <img  src={item.img} width='110'  />

          
          <div className='detallesCarrito'>
              <p> {item.title} </p>
              <p> Cantidad: {item.cantidad} </p>
              <p> Total: {item.total}  </p>

          </div>

          <div>

            <p style={{fontSize:'1.5rem', cursor:'pointer'}} onClick={ ()=> eliminar(item.id)} >  Eliminar </p>
          </div>
        
      </div>
    ) )
  }



  </div>


  <div className='contenedorTotalAPagar'>
      <p  > Total: ${aPagar} </p>

      <button onClick={ () => navigate('/pagar') }  > Continuar </button>

  </div>

          
          </>:

          <div>
            <h1 style={{marginTop:'14rem'}} >No tienes Robux en el carrito</h1>

                <div style={{width:'fit-content', margin:'0 auto', marginTop:'5rem'}} >
                    <Button text='Ver Robux' fn={irInicio} />
                </div>
          </div>
      }

   

    </div>
  )
}
