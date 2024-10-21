import './btnAjuda.scss'
import btnAjudaIcon from './img/btnAjuda.svg';


function BtnAjuda () {
    return(
        <div className='btnAjuda-div' >
        <button><img src={btnAjudaIcon} alt="Botão de ajuda" /></button>
        </div>
        
    )
}


export default BtnAjuda;