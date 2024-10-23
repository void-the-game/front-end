

import Bolinhas from "../../components/bolinhas/Bolinhas";
import btnVoltar from"../../components/img/btnVoltar.svg"
import { Link } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton"
import "./cadastro.scss"
import CustomInput from "../../components/Inputs/CustomInputs";



function Cadastro () {

    return(
        <div>
            <Bolinhas isColored={false}/>
            <section className="container-cadastro">

                <header className="cabecalho">
                     
                    <h2 className="void-cadastro">VOID</h2>
                </header>
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
                    <Link to="/"  style={{ textDecoration: 'none' }} >           
                        <CustomButton
                        label="voltar"
                        width="5rem"
                        
                        className="btn-voltar"
                        />
                    </Link>
                    </div>
                    <div className="div-btnConcluir">
                    <Link to="/"  style={{ textDecoration: 'none' }} >           
                        <CustomButton
                        label="Concluir"
                        width="5rem"                        
                        className="btn-concluir"
                        />
                    </Link>
                    </div>
        
            </section>
        </div>

    )
}


export default Cadastro;