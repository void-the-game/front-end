import CustomButton from "../../Buttons/CustomButton"
import "./menuEntrar.scss"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function MenuEntrar() {
  const navigate = useNavigate()

  return (
    <div className="containerMenuEntrar">
      <div>
        <CustomButton
          label="entrar"
          className="__btn-login btn-login"
          onClick={() => navigate("/login")}
        />
      </div>

      <Link to="/cadastro" className="link-cadastro">
        <CustomButton
          label="criar conta"
          className="__btn-entrar btn-entrar"
          width="400px"
        />
      </Link>
    </div>
  )
}

export default MenuEntrar
