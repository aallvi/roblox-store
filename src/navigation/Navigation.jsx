import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes,BrowserRouter, Navigate, HashRouter } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Carrito } from '../pages/Carrito'
import { Entregas } from '../pages/Entregas'
import {Homescreen} from '../pages/Homescreen'
import { QuienesSomos } from '../pages/QuienesSomos'

export const Navigation = () => {

    const dispatch = useDispatch()


  return (
    <HashRouter>

    <Navbar/>

    <div className='contenedorRutas'>

    <Routes>
        

        <Route path='/' element={ <Homescreen/> } />
        <Route path='/quienes-somos' element={ <QuienesSomos/> } />
        <Route path='/entregas' element={ <Entregas/> } />

        <Route path='/carrito' element={ <Carrito/> } />

    </Routes>

    </div>
    


     {/* <Footer/> */}

    </HashRouter>

  )
}
