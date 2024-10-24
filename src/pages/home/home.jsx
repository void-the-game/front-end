import Bolinhas from "../../components/bolinhas/Bolinhas"
import Titulo from "../../components/telaInicio/titulo/Titulo"
import MenuEntrar from "../../components/telaInicio/menuEntrar/menuEntrar"
import MenuInicio from "../../components/telaInicio/menu-inicio/MenuInicio"
import "./home.scss"

import BtnAjudaImg from "../../components/img/btnAjuda.svg"
import CustomButton from "../../components/Buttons/CustomButton"



function Home() {
  

  return (
    
      <div className='app'>
        <Bolinhas isColored={true}/>
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
        
        <div className="btnAjuda-div">
          <CustomButton
          className="btnAjuda"
          imageSrc={BtnAjudaImg}
          imgWidth="80px" 
          imgHeight="80px"
          />
        </div>

      </div>
        
    
  )
}

export default Home
