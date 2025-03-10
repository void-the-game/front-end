import Bolinhas from "../../components/bolinhas/Bolinhas"

import { Link, useNavigate } from "react-router-dom"
import CustomButton from "../../components/Buttons/CustomButton"
import "./cadastro.scss"
import CustomInput from "../../components/Inputs/CustomInputs"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { apiDev } from "../../services/api"
import { toast } from "react-toastify"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Titulo from "../../components/telaInicio/titulo/Titulo"

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
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const navigate = useNavigate()

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

  const handleRegister = (data) => {
    let errors = []
    for (const error in passwordErrors) {
      errors.push(passwordErrors[error])
    }

    if (errors.some((err) => !err)) {
      return
    }

    const registerData = {
      username: data.username,
      email: data.email,
      password: data.password,
    }

    toast.promise(
      apiDev
        .post("/user/create", registerData)
        .then((resp) => {
          toast.success("Cadastro realizado com sucesso!", {
            className: "toast-message",
          })
          navigate("/login")
        })
        .catch((err) => {
          console.log(err)
          toast.error("Erro no cadastro", { className: "toast-message" })
        }),
      {
        pending: "Cadastrando",
      },
      { className: "toast-message" }
    )
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(handleRegister)()
    }
  }

  return (
    <>
      <section className="container-cadastro">
        <Titulo/>
        <Bolinhas isColored={true} />
        <main className="main">
          <div className="div-container-inputs">
            <h2 className="titulo-cadastro">CADASTRO</h2>
            <form onKeyDown={handleKeyPress}>
              <div>
                <CustomInput
                  placeholder="Usuario"
                  type="text"
                  id="inputUsuario"
                  register={register}
                  name="username"
                />
                {errors.username && <span>{errors.username?.message}</span>}
              </div>
              <div>
                <CustomInput
                  placeholder="E-mail"
                  type="email"
                  id="inputEmail"
                  register={register}
                  name="email"
                />
                {errors.email && <span>{errors.email?.message}</span>}
              </div>
              <div>
                <CustomInput
                  placeholder="Confirme seu E-mail"
                  type="email"
                  id="inputConfEmail"
                  register={register}
                  name="emailConfirm"
                />
                {errors.emailConfirm && (
                  <span>{errors.emailConfirm?.message}</span>
                )}
              </div>
              <div>
                <CustomInput
                  placeholder="Senha"
                  type="password"
                  id="inputPassword"
                  register={register}
                  name="password"
                  onChange={handlePasswordChange}
                />
                {errors.password && <span>{errors.password?.message}</span>}
                
              </div>
              <div>
                <CustomInput
                  placeholder="Confirme sua Senha"
                  type="password"
                  id="inputConfPassword"
                  register={register}
                  name="passwordConfirm"
                />
                {errors.passwordConfirm && (
                  <span>{errors.passwordConfirm?.message}</span>
                )}
              </div>
              <div className="div-password-errors">
                  {!passwordErrors.minLength && (
                    <span>A senha deve ter pelo menos 8 caracteres, conter uma letra maiúscula, uma minúscula, um número e um caractere especial</span>
                  )}
                </div>
            </form>
          </div>
        </main>
        <div className="container-buttons">
          <div className="div-btnVoltar">
            <div className="div-btnVoltar__blur"></div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <CustomButton
                label={<><FontAwesomeIcon icon={faCaretLeft} /> Voltar</>}
                width="5rem"
                className="btn-voltar"
              />
            </Link>
          </div>
          <div className="div-btnConcluir">
            <div className="div-btnConcluir__blur"></div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <CustomButton
                label={<><FontAwesomeIcon icon={faCaretRight} /> Seguir</>}
                width="5rem"
                className="btn-concluir"
                onClick={handleSubmit(handleRegister)}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cadastro
