import React, { useContext } from 'react'
import { ProductContext } from './ProductCard'

export const ProductImage = () => {

  const {product} =  useContext(ProductContext)

  const {img} = product

  return (
    // <></>
 


    <img  src={img} width='180'  />



  )
}
