import btnVoltarIcon from './img/btnVoltar.svg';
import './btnVoltar.scss'


function BtnVoltar () {
    return(
     <div className='btnVoltar-div'>
        
        <button><img className='img-btnVoltar' src={btnVoltarIcon} alt="botão de voltar" /></button>
    </div>   
    )
    
}


export default BtnVoltar;