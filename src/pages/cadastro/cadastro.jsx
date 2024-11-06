import Bolinhas from "../../components/bolinhas/Bolinhas"

import { Link, useNavigate } from "react-router-dom"
import CustomButton from "../../components/Buttons/CustomButton"
import "./cadastro.scss"
import CustomInput from "../../components/Inputs/CustomInputs"
import setaEsquerda from "../../components/img/setaEsquerda.svg"
import setaDireita from "../../components/img/setaDireita.svg"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"

function Cadastro() {
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("E-mail inválido"),
    emailConfirm: yup
      .string()
      .required("Campo Obrigatório")
      .email("E-mail inválido")
      .oneOf([yup.ref("email")], "Os E-mails devem coincidir"),
    password: yup.string().required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem coincidir"),
  })

  const [passwordErrors, setPasswordErrors] = useState({
    minLength: true,
    hasUppercase: true,
    hasLowercase: true,
    hasNumber: true,
    hasSpecial: true,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const navigate = useNavigate()

  const handleLogin = (data) => {
    console.log(data)
  }

  // Função para validar a senha em tempo real
  const handlePasswordChange = (e) => {
    const password = e.target.value

    setPasswordErrors({
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    })
  }

  return (
    <div>
      <Bolinhas isColored={false} />
      <section className="container-cadastro">
        <main className="main">
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
          <Link to="/" style={{ textDecoration: "none" }}>
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
          <Link to="/" style={{ textDecoration: "none" }}>
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

export default Cadastro
