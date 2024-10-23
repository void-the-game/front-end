

import Bolinhas from "../../components/bolinhas/Bolinhas";
import btnVoltar from"../../components/img/btnVoltar.svg"
import { Link } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton"
import "./cadastro.scss"



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
                                <label htmlFor="usuario">Usuário</label>
                                <input type="text" id="uruario" />
                            </div>
                            <div>
                            <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" /> 
                            </div>
                            <div>
                                <label htmlFor="confEmail">Confirmação do e-mail</label>
                                <input type="email" id="confEmail" />
                            </div>
                            <div>
                                <label htmlFor="password">Senha</label>
                                <input type="password" id="password" />
                            </div>
                            <div>
                                <label htmlFor="confPassword">Confirmação da senha</label>
                                <input type="password" id="confPassword" />
                            </div>
                            <div className="div-btnConcluir">
                                <CustomButton
                                label="concluir"
                                className="btn-concluir"
                                />
                            </div>
                           
                        </div>
                    </div>
                    
                    <div className="container-btn-concluir">
                        <div className="blurback-concluir"></div>
                        <div className="div-btnConcluir">
                            
                        </div>
                    </div>
                    
                </main>
                    <div className="div-btnVoltar">
                    <Link to="/"  style={{ textDecoration: 'none' }} >           
                        <CustomButton
                        imageSrc={btnVoltar}
                        width="5rem"
                        imgWidth="5rem"
                        imgHeight="5rem"
                        className="btn-voltar"
                        />
                    </Link>
                    </div>
        
            </section>
        </div>

    )
}


export default Cadastro;