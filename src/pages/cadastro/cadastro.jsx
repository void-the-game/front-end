

import Bolinhas from "../../components/bolinhas/Bolinhas";

import { Link } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton"
import "./cadastro.scss"
import CustomInput from "../../components/Inputs/CustomInputs";
import setaEsquerda from "../../components/img/setaEsquerda.svg";
import setaDireita from "../../components/img/setaDireita.svg";

function Cadastro () {

    return(
        <div>
            <Bolinhas isColored={false}/>
            <section className="container-cadastro">

                
                <main>
                    
                    <div className="container-candastro-inputs">
                        
                        <div className="div-container-inputs">
                            <h2 className="titulo-cadastro">cadastro</h2>
                            <div>                                
                                <CustomInput 
                                    placeholder="Usuario"
                                    type="text"
                                    id="inputUsuario"
                                />
                            </div>
                            <div>
                                <CustomInput 
                                    placeholder="E-mail"
                                    type="email"
                                    id="inputEmail"
                                /> 
                            </div>
                            <div>
                            <CustomInput 
                                    placeholder="Confirme seu E-mail"
                                    type="email"
                                    id="inputConfEmail"
                                />
                                
                            </div>
                            <div>
                                <CustomInput 

                                    placeholder="Senha"
                                    type="password"
                                    id="inputPassword"
                                />
                                
                            </div>
                            <div>
                                <CustomInput 
                                    placeholder="Confirme sua Senha"
                                    type="password"
                                    id="inputConfPassword"
                                />
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    
                </main>
                    <div className="div-btnVoltar">
                        <div className="div-btnVoltar__blur"></div>
                        <Link to="/"  style={{ textDecoration: 'none' }} >           
                            <CustomButton
                            label="Voltar"
                            width="5rem"
                            imageSrc={setaEsquerda}
                            imgWidth="1.5rem" 
                            imgHeight="1.5rem"
                            
                            className="btn-voltar"
                            />
                        </Link>
                    </div> 
                    <div className="div-btnConcluir">
                        <div className="div-btnConcluir__blur"></div>
                        <Link to="/"  style={{ textDecoration: 'none' }} >           
                            <CustomButton
                            label="Concluir"
                            width="5rem"                        
                            className="btn-concluir"
                            imageSrc={setaDireita}
                            imgWidth="1.5rem" 
                            imgHeight="1.5rem"
                            
                            />
                        </Link>
                    </div>
        
            </section>
        </div>

    )
}


export default Cadastro;