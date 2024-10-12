import Bolinhas from "../../components/bolinhas/Bolinhas"
import Titulo from "../../components/titulo/Titulo"
import MenuEntrar from "../../components/menuEntrar/menuEntrar"
import MenuInicio from "../../components/menu-inicio/MenuInicio"
import "./home.css"


function Home() {
  

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

export default Home
