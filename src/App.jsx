import { useState } from 'react'
import './styles/styles.scss'
import { Homescreen } from './pages/Homescreen'
import { Navigation } from './navigation/Navigation'
import { Provider } from 'react-redux'
import store from "./store/store"

function App() {
  const [count, setCount] = useState(0)

  return (

    <Provider store={store} >

    <Navigation/>
    </Provider>

  )
}

export default App
