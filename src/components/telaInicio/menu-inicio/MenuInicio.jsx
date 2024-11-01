import CustomButton from "../../Buttons/CustomButton"
import "./MenuInicio.css"

function MenuInicio() {
  return (
    <div className="menu-inicio">
      <div className="blurback"></div>
      <div className="container-blur2">
        <div className="blurback2"></div>
        <div className="borda-menu-div">
          <CustomButton
            className="btn-inicio"
            label="JOGAR"
            backColor="transparent"
            fontSize="2rem"
          />
        </div>

        <CustomButton
          className="btn-inicio"
          label="SALAS"
          backColor="transparent"
          fontWeight="400"
          fontSize="2rem"
        />
      </div>
    </div>
  )
}

export default MenuInicio
