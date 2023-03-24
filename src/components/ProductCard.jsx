import React, { createContext } from 'react'


export const ProductContext = createContext({})
const {Provider} = ProductContext



export const ProductCard = ({children, product}) => {


   
  return (

    <Provider value={{product}} >

    <div className='productCard' >


         {children }


    </div>
    </Provider>

  )
}
