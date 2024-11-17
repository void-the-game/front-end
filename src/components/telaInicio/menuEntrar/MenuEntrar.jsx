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
          className="__btn-entrar btn-entrar"
          color="#2E6E89"
          onClick={() => navigate("/login")}
        />
      </div>

      <Link to="/cadastro" style={{ textDecoration: "none" }}>
        <CustomButton
          label="criar conta"
          className="__btn-entrar btn-entrar"
          color="#50BBE9"
          width="400px"
        />
      </Link>
    </div>
  )
}

export default MenuEntrar
