

import BolinhasBrancas from "../../components/bolinhasBrancas/BolinhasBrancas";
import BtnVoltar from "../../components/btnVoltar/BtnVoltar";

import "./cadastro.scss"



function Cadastro () {

    return(
        <div>
            <BolinhasBrancas/>
            <section className="container-cadastro">

                <header className="cabecalho">
                    <h2 className="titulo-cadastro">cadastro</h2> 
                    <h2 className="titulo-void void-cadastro">VOID</h2>
                </header>
                <main>
                    <div div-btnVoltar-container>           
                        <BtnVoltar/>
                    </div>
                    <div className="container-candastro-inputs">
                        <div className="div-container-inputs">
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
                        
                        </div>
                    </div>
                    
                    <div className="container-btn-concluir">
                        <div className="blurback-concluir"></div>
                        <div className="div-btnConcluir">
                            <button className="btn-concluir">Concluir</button>
                        </div>
                    </div>
                    
                </main>

        
            </section>
        </div>

    )
}


export default Cadastro;