import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Login from '.'
import { apiDev } from '../../services/api'
import MockAdapter from 'axios-mock-adapter'
import { ToastContainer } from 'react-toastify'

const apiMock = new MockAdapter(apiDev)

// Mock do useNavigate
const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('Login Page Unit Testing', () => {
  test('Should show message erros', async () => {
    render(<Login />)

    const emailField = screen.getByPlaceholderText('E-mail')

    fireEvent.change(emailField, { target: { value: 'meuEmail' } })

    const button = screen.getByText('Entrar')

    await userEvent.click(button)

    expect(emailField).toHaveValue('meuEmail')

    //Campo de email preenchido de forma errada
    expect(screen.getByText('E-mail inválido')).toBeTruthy()

    //Campo de senha não preenchido
    expect(screen.getByText('Campo Obrigatório')).toBeTruthy()
  })
})

describe('Login Page Integration Testing', () => {
  test('Should fail to sign in', async () => {
    apiMock.onPost('/user/login').reply(400, {})

    // Silencia console.log temporariamente
    const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => {})

    render(
      <>
        <Login />
        <ToastContainer />
      </>,
    )

    const emailField = screen.getByPlaceholderText('E-mail')
    const passwordField = screen.getByPlaceholderText('Senha')

    await userEvent.type(emailField, 'teste@mail.com')
    await userEvent.type(passwordField, 'Void@@68465')

    const button = screen.getByText('Entrar')
    await userEvent.click(button)

    expect(
      screen.getByText('Erro na autenticação, verifique seu e-mail ou senha'),
    ).toBeTruthy()
    expect(
      screen.getByText('Erro na autenticação, verifique seu e-mail ou senha'),
    ).toBeInTheDocument()

    expect(mockNavigate).not.toHaveBeenCalled()

    // Restaura console.log
    consoleLogMock.mockRestore()
  })

  test('Should be able to sign in', async () => {
    apiMock.onPost('/user/login').reply(200, {
      accessToken: 'fake-token',
      username: 'teste',
    })

    render(
      <>
        <Login />
        <ToastContainer />
      </>,
    )

    const emailField = screen.getByPlaceholderText('E-mail')
    const passwordField = screen.getByPlaceholderText('Senha')

    await userEvent.type(emailField, 'teste@mail.com')
    await userEvent.type(passwordField, 'Voidtest$1234')

    const button = screen.getByText('Entrar')
    await userEvent.click(button)

    expect(screen.getByText('Bem-Vindo ao VOID!')).toBeTruthy()
    expect(screen.getByText('Bem-Vindo ao VOID!')).toBeInTheDocument()

    expect(mockNavigate).toHaveBeenCalledWith('/')

    expect(localStorage.getItem('@Void:token')).toBe('fake-token')
    expect(localStorage.getItem('@Void:user')).toBe('teste')
  })
})
