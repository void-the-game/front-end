import CustomButton from '../../Buttons/CustomButton';
import './menuEntrar.scss'
import { Link } from "react-router-dom";




function MenuEntrar(){
   
    return(
        <div className="containerMenuEntrar">
            <div>
                
                <CustomButton
                label='entrar'
                className="__btn-entrar btn-entrar"
                color="#2E6E89"
                />
            </div>
            
            <Link to="/cadastro"  style={{ textDecoration: 'none' }} >           
                <CustomButton
                    label='criar conta'
                    className="__btn-entrar btn-entrar"
                    color="#50BBE9"
                    width="400px"
                    
                    />
            </Link>    
        </div>
    )
}

export default MenuEntrar;