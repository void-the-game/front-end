import Bolinhas from "../../components/bolinhas/Bolinhas"
import Titulo from "../../components/telaInicio/titulo/Titulo"
import MenuEntrar from "../../components/telaInicio/menuEntrar/MenuEntrar"
import MenuInicio from "../../components/telaInicio/menu-inicio/MenuInicio"
import "./home.scss"
import purpleAvatar from "../../components/img/purpleavatar.svg"
import configIcon from "../../components/img/configurationIcon.svg"
import BtnAjudaImg from "../../components/img/btnAjuda.svg"
import CustomButton from "../../components/Buttons/CustomButton"
import { useState } from "react"

function Home() {
  const [user] = useState(localStorage.getItem("@Void:user") || null)

  return (
    <div className="app">
      <Bolinhas isColored={true} />
      <div className="container-app">
        <div className="container-titulo">
          <Titulo />
        </div>
        <div className="container-menu-inicio">
          <MenuInicio />
        </div>
        {!user ? (
          <div>
            <MenuEntrar />
          </div>
        ) : (
          <div className="container-user-infos">
            <figure>
              <img src={purpleAvatar} alt="Avatar do usuário" />
              <figcaption>Avatar do usuário</figcaption>
            </figure>
            <span>{user}</span>
          </div>
        )}
      </div>

      <div className={user ? "btnAjuda-div-left" : "btnAjuda-div-right"}>
        <CustomButton
          className="btnAjuda"
          imageSrc={BtnAjudaImg}
          imgWidth="80px"
          imgHeight="80px"
        />
      </div>

      {user && (
        <div className="btnConfig-div">
          <img src={configIcon} alt="Icone de configuração" />
        </div>
      )}
    </div>
  )
}

export default Home
