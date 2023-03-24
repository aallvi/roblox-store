import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {

  const dispatch = useDispatch()


  const {carrito} = useSelector( (state) => state.app  )

  console.log(carrito,'carrito')

  let reduce = carrito.reduce((acumulador, actual) => acumulador + actual.cantidad, 0);
  console.log(reduce)

  return (
    <div className='contenedorNavbar' >

      <ul className='navbarUl' >

      <li className='robloxChile' >
        Roblox Chile
      </li> 

      

          <li>
            <NavLink
              to="/"
              onClick={() => setToggleMenu(false) }

              className={({ isActive }) =>
                isActive ? 'BotonNavActive' : 'BotonNav'
              }
            >
              Robux
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quienes-somos"
              onClick={() => setToggleMenu(false) }

              className={({ isActive }) =>
                isActive ? 'BotonNavActive' : 'BotonNav'
              }
            >
              Quienes somos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entregas"
              onClick={() => setToggleMenu(false) }

              className={({ isActive }) =>
                isActive ? 'BotonNavActive' : 'BotonNav'
              }
            >
              Entregas y Pagos
            </NavLink>
          </li>

          
          <li>
            <NavLink
              to="/carrito"
              onClick={() => setToggleMenu(false) }

              className={({ isActive }) =>
                isActive ? 'BotonNavActive' : 'BotonNav'
              }
            >
              Carrito { carrito.length > 0 && `(${reduce})` }
            </NavLink>
          </li>



     



      </ul>


    </div>
  )
}
