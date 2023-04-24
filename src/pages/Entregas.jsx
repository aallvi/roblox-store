import React from 'react'

export const Entregas = () => {
  return (
    <div className='contenedorEntregasyPagos' >



       <h1 className='text-center' >Formas de pagos y entregas</h1>

      <div className='contenedorInformacion' >
            <div  >
                  <p className='text-bold' >Pagos: </p>
                  <p> Los pagos son todos online a traves de una integracion con Khipu. El cual es un sistema de pago online parecido a Webpay que cumple con todos los estandares de seguridad requeridos.  </p>
                  <p> Una vez realizado el pago, te enviamos a tu correo un comprobante y procederemos a comunicarnos con contigo para hacer entrega del producto.</p>
                  <a style={{ marginTop:'5rem', color:'blue'}} href=' https://www.khipu.com/page/seguridad-para-el-pagador/'  target='_blank' >  Saber mas sobre Khipu </a>
                
            </div>

            <div>
                  <p className='text-bold' >Entregas: </p>
                  <p> Una vez realizado el pago, en aproximadamente 15 minutos te hacemos entrega de los productos por medio de email y/o whatsapp.  </p>
                  <p> Cuando tengas el codigo, debes ir a canjearlo a la pagina oficial de roblox. </p>
                  <a style={{ marginTop:'5rem',  color:'blue'}} href=' https://www.roblox.com/redeem'  target='_blank' >  Link a roblox </a>
                  <p style={{}} >  https://www.roblox.com/redeem </p>
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
