import Bolinhas from "../../components/bolinhas/Bolinhas"
import styles from "./login.module.scss"
import setaEsquerda from "../../components/img/setaEsquerda.svg"
import purpleArrow from "../../components/img/purpleArrow.svg"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo Obrigatório"),
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(handleLogin)()
    }
  }

  return (
    <main className={styles.login__main}>
      <Bolinhas />
      <section className={styles["login__section--login"]}>
        <h1>LOGIN</h1>
        <form onKeyDown={handleKeyPress}>
          <div>
            <input type="text" placeholder="E-mail" {...register("email")} />
            {errors.email && <span>{errors.email?.message}</span>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password && <span>{errors.password?.message}</span>}
          </div>
        </form>
        <a href="">Esqueceu a senha?</a>
      </section>

      <section className={styles["login__section--buttons"]}>
        <button
          className={styles["s-buttons__back"]}
          onClick={() => navigate("/")}
        >
          <div className={styles["s-buttons__blur--White"]} />

          <div className={styles["s-buttons__backElements"]}>
            <img src={setaEsquerda} alt="" />
            <span>Voltar</span>
          </div>
        </button>

        <button
          type="submit"
          className={styles["s-buttons__next"]}
          onClick={handleSubmit(handleLogin)}
        >
          <div className={styles["s-buttons__blur--Purple"]} />

          <div className={styles["s-buttons__nextElements"]}>
            <img src={purpleArrow} alt="" />
            <span>Entrar</span>
          </div>
        </button>
      </section>
    </main>
  )
}

export default Login
