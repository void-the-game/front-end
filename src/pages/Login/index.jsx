import Bolinhas from '../../components/bolinhas/Bolinhas'
import styles from './login.module.scss'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { apiDev } from '../../services/api'
import { toast } from 'react-toastify'
import Titulo from '../../components/telaInicio/titulo/Titulo'
import CustomButton from '../../components/Buttons/CustomButton'
import { BiSolidRightArrow } from 'react-icons/bi'
import { BiSolidLeftArrow } from 'react-icons/bi'
import * as Sentry from '@sentry/react'

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required('Campo Obrigatório').email('E-mail inválido'),
    password: yup.string().required('Campo Obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const navigate = useNavigate()

  const handleLogin = (data) => {
    Sentry.logger.info('Login attempt started', {
      email: data.email.split('@')[0] + '@***',
    })

    apiDev
      .post('/user/login', data)
      .then((resp) => {
        localStorage.setItem('@Void:user', resp.data.username)
        localStorage.setItem('@Void:token', resp.data.accessToken)
        toast.success('Bem-Vindo ao VOID!', { className: 'toast-message' })
        navigate('/')

        Sentry.logger.info('Login successful', {
          username: resp.data.username,
          timestamp: new Date().toISOString(),
        })

        Sentry.setUser({
          username: resp.data.username,
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error('Erro na autenticação, verifique seu e-mail ou senha', {
          className: 'toast-message',
        })

        Sentry.logger.error('Login failed', {
          error: err.message,
          status: err.response?.status,
        })
        Sentry.captureException(err)
      })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(handleLogin)()
    }
  }

  return (
    <main className={styles.login__main}>
      <Titulo />

      <Bolinhas isColored={true} />
      <section className={styles['login__section--login']}>
        <h1>LOGIN</h1>
        <form onKeyDown={handleKeyPress}>
          <div>
            <input type="text" placeholder="E-mail" {...register('email')} />
            {errors.email && <span>{errors.email?.message}</span>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
            {errors.password && <span>{errors.password?.message}</span>}
          </div>
        </form>
        <a href="">Esqueceu a senha?</a>
      </section>

      <section className={styles['login__section--buttons']}>
        <CustomButton blur onClick={() => navigate('/')}>
          <BiSolidLeftArrow /> Voltar
        </CustomButton>

        <CustomButton blur next onClick={handleSubmit(handleLogin)}>
          Entrar <BiSolidRightArrow />
        </CustomButton>
      </section>
    </main>
  )
}

export default Login
