import './menuEntrar.scss'


import Cadastro from '../../../pages/cadastro/cadastro';

function MenuEntrar(){
   
    return(
        <div className="containerMenuEntrar">
            <div>
                <button className='__btn-entrar btn-entrar'>entrar</button>
            </div>
            
            <button className='btn-entrar containerMenuEntrar__btn-criar-conta'>criar conta?</button>
        </div>
    )
}

export default MenuEntrar;