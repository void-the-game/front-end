import { useState } from 'react'
import Titulo from './components/titulo/Titulo';
import Bolinhas from './components/bolinhas/Bolinhas';
import MenuInicio from './components/menu-inicio/MenuInicio';
import MenuEntrar from './components/menuEntrar/menuEntrar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='app'>
        <Bolinhas />
        <div className='container-app'>
          <div className='container-titulo'>
            <Titulo  />
          </div>
          <div className='container-menu-inicio'>
            < MenuInicio />
              
          </div>
          <div>
            <MenuEntrar />
          </div>
        </div>

      </div>
        
    
  )
}

export default App
