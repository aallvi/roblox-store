import { useSelector } from "react-redux"
import { ProductButtons } from "../components/ProductButtons"
import { ProductCard } from "../components/ProductCard"
import { ProductDetails } from "../components/ProductDetails"
import { ProductImage } from "../components/ProductImage"

import products from "../db/products.json"

export const Homescreen = () => {

  const {carrito} = useSelector( (state) => state.app  )

  console.log(carrito,'carrito')

  return (
    
   <div className="contenedorProductos" >

      {
        products.map((product) => (  



            <ProductCard key={product.id} product={product} >


            <ProductImage  />
            <ProductDetails />
            <ProductButtons/>
    
    
           </ProductCard>
       

         ) )
      }

     
   
   
   </div>



  )
}
