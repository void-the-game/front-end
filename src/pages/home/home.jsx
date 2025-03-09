import Bolinhas from "../../components/bolinhas/Bolinhas"
import Titulo from "../../components/telaInicio/titulo/Titulo"
import MenuEntrar from "../../components/telaInicio/menuEntrar/MenuEntrar"
import MenuInicio from "../../components/telaInicio/menu-inicio/MenuInicio"
import styles from "./home.module.css"
import purpleAvatar from "../../components/img/purpleavatar.svg"
import configIcon from "../../components/img/configurationIcon.svg"
import CustomButton from "../../components/Buttons/CustomButton"
import { useState } from "react"
import { BsQuestionLg } from "react-icons/bs"

function Home() {
  const [user] = useState(localStorage.getItem("@Void:user") || null)

  return (
    <div className={styles.app}>
      <Bolinhas isColored={true} />
      <div className={styles["container-app"]}>
        <div className={styles["container-titulo"]}>
          <Titulo />
        </div>
        <div className={styles["container-menu-inicio"]}>
          <MenuInicio />
        </div>
        {!user ? (
          <div>
            <MenuEntrar />
          </div>
        ) : (
          <div className={styles["container-user-infos"]}>
            <figure>
              <img src={purpleAvatar} alt="Avatar do usuário" />
              <figcaption>Avatar do usuário</figcaption>
            </figure>
            <span>{user}</span>
          </div>
        )}
      </div>

      <div
        className={
          user ? styles["btnAjuda-div-left"] : styles["btnAjuda-div-right"]
        }
      >
        <CustomButton terciary>
          <BsQuestionLg />
        </CustomButton>
      </div>

      {user && (
        <div className={styles["btnConfig-div"]}>
          <img src={configIcon} alt="Icone de configuração" />
        </div>
      )}
    </div>
  )
}

export default Home
