import React from 'react'

export const QuienesSomos = () => {
  return (
    <div className='contenedorEntregasyPagos' >



    <h1 className='text-center' >Quienes Somos</h1>

   <div className='contenedorInformacion' >
         <div  >
               <p className='text-bold' >Robux Store: </p>
               <p> Con mas de 4 años de experiencia vendiendo juegos, monedas, contenido y skin digitales por mercadolibre e instagram, hemos decidido lanzar nuestro propio Ecommerce.  </p>
               <p> Esto nos da una comunicacion con el cliente mucho mas personalizada e incluso nos permite bajar nuestros precios.</p>
               
             
         </div>

         <div>
               <p className='text-bold' >Representante: </p>
               <p> Nuestro representante es Alvaro Leiva, de profesión Ingeniero Comercial y Desarrollador de Software.  </p>
               <p> Apasionado de los videojuegos y de la tecnologia en general. </p>

               <a style={{ marginTop:'5rem',  color:'blue'}} href=' https://www.linkedin.com/in/alvaro-leiva-gil-aaa6ba201/'  target='_blank' >  Ver a Linkedin </a>

         </div>



         <div className='contenedorDudas' >

                     <p> ¿Quedaste con dudas? </p>
                     <a style={{ marginTop:'5rem',  color:'blue'}} href='https://wa.me/56962121886'  target='_blank' >  Hablanos por Whatsapp </a>
                     <p> Telefono: +569 62121886 </p>

         </div>

   </div>
   


    


 </div>
  )
}
