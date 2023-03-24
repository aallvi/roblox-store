import React, { useContext }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { agregarCarrito } from '../store/slices/appSlice'
import { ProductContext } from './ProductCard'
import Modal from 'react-modal';

export const ProductButtons = () => {

   const {product} = useContext(ProductContext)
   const dispatch = useDispatch()

   const {carrito} = useSelector( (state) => state.app  )


   const agregar = () => {
     console.log(product)

     

    //  console.log(product)

    //  return

     dispatch(agregarCarrito({product}))
     closeModal()

     Swal.fire(
      {
        title: 'Robux agregados!',
        text:`${product.title} a sido añadido al carrito `,
        confirmButtonColor:'green',
      }
     
    )

   }



   const [modalIsOpen, setIsOpen] = React.useState(false);

   function openModal() {
     setIsOpen(true);
   }
 
   function afterOpenModal() {
     // references are now sync'd and can be accessed.
  
   }
 
   function closeModal() {
     setIsOpen(false);
   }


  

   const customStyles = {
    content: {
    top: '18%',
    padding:'20px',
    paddingLeft:"40px",
    paddingRight:"40px",
    width:"500px",
    margin:'0 auto',
    height:'500px'
    },
};

  return (
    <div className='contenedorBotonesCard'>
   <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
  
        <button className='buttonCloseModal' onClick={closeModal}>X</button>

        <div className='contenedorDetalles'>

          
              <h1 style={{textAlign:'center'}} >{product.title}</h1> 

              <p style={{textAlign:'center', marginTop:'5rem'}} > Al hacer el pago entregamos un codigo que debe ser canjeado en la pagina oficial del juego </p>

              <p style={{textAlign:'center'}}>Para canjearlo, debes iniciar con su usuario y contraseña para despues canjear el codigo que le enviaremos</p>

              <a style={{ marginTop:'5rem'}} href=' https://www.roblox.com/redeem'  target='_blank' >  Link a roblox </a>
              <p style={{textAlign:'center'}} >  https://www.roblox.com/redeem </p>

              <p style={{textAlign:'center', marginTop:'6rem', color:'green' }} > ${product.precio} </p>


              <button onClick={  agregar} > Agregar al carro </button>

        </div>

       
      </Modal>
      

      <button onClick={agregar} > Agregar al carro </button>
      <button onClick={openModal} > Ver detalles </button>


    </div>
  )
}
