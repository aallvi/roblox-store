import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carrito: [],
}


 export const appSlice = createSlice({
       name: 'auth',
       initialState,

       reducers:{

        agregarCarrito: (state, action) => {

            const filtro = state.carrito.filter(item => item.id == action.payload.product.id)
            
            if(filtro.length ===0 ){
                console.log('noelse')

                    // si obj tiene cantidad es por que ya se le asigno
                    if(action.payload.product.cantidad){
                        state.carrito = [ ...state.carrito, action.payload.product]

                    } else {
                        const obj2 = {
                            cantidad: 1,
                            total: action.payload.product.precio
                        }
        
                        Object.assign(action.payload.product, obj2)
                        state.carrito = [ ...state.carrito, action.payload.product]

                    }
                    



            } else{

                console.log('else')

               const filtro = state.carrito.filter(item => item.id !== action.payload.product.id)
               const produc = state.carrito.filter(item => item.id === action.payload.product.id)


               console.log(action.payload.product)

               produc[0].cantidad ++

               produc[0].total = produc[0].precio * produc[0].cantidad

                state.carrito = [ ...filtro, produc[0]]


            }


              
                // state.carrito = [ ...state.carrito, action.payload.product[cantidad]= 1 ]\


        },
        eliminarProducto: (state, action) => {
      
            state.carrito = state.carrito.filter(item => item.id !== action.payload.id)
        },
        autenticar: (state, action) => {

            state.data = action.payload.data
            state.autenticado = 'autorizado'
            state.token = action.payload.token
        },

     

        



    }

  });

export const { agregarCarrito, eliminarProducto} =  appSlice.actions
