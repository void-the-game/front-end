import './menuEntrar.css'


import Cadastro from '../../pages/cadastro/cadastro';

function MenuEntrar(){
   
    return(
        <div className="container-menu-entrer">
            <div>
                <button className='btn-entrar'>entrar</button>
            </div>
            
            <button className='btn-entrar btn-criar-conta'>criar conta?</button>
        </div>
    )
}

export default MenuEntrar;