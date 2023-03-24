import React, { useContext } from 'react'
import { ProductContext } from './ProductCard'

export const ProductDetails = () => {

   const {product} = useContext(ProductContext)


  return (
    <div className='productDetails'>

        <p> {product.title} </p>
        <p> ${product.precio} </p>



    </div>
  )
}
