import Bolinhas from "../../components/bolinhas/Bolinhas"
import Titulo from "../../components/telaInicio/titulo/Titulo"
import MenuEntrar from "../../components/telaInicio/menuEntrar/menuEntrar"
import MenuInicio from "../../components/telaInicio/menu-inicio/MenuInicio"
import "./home.scss"
import BtnAjuda from "../../components/btnAjuda/BtnAjuda"



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
        <BtnAjuda/>

      </div>
        
    
  )
}

export default Home
