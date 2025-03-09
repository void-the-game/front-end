import CustomButton from "../../Buttons/CustomButton"
import styles from "./menuEntrar.module.css"
import { useNavigate } from "react-router-dom"

function MenuEntrar() {
  const navigate = useNavigate()

  return (
    <div className={styles.containerMenuEntrar}>
      <div className={styles["div-login"]}>
        <CustomButton onClick={() => navigate("/login")}>Entrar</CustomButton>
      </div>

      <div className={styles["div-cadastro"]}>
        <CustomButton onClick={() => navigate("/register")}>
          Criar Conta
        </CustomButton>
      </div>
    </div>
  )
}

export default MenuEntrar
