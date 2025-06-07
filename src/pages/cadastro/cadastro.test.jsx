import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Cadastro from './cadastro'
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

describe('Register Page Integration Testing', () => {
  test('Should fail to register a new user', async () => {
    apiMock.onPost('/user/create').reply(400, {})

    // Silencia console.log temporariamente
    const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => {})

    render(
      <>
        <Cadastro />
        <ToastContainer />
      </>,
    )

    const userField = screen.getByPlaceholderText('Usuario')
    const emailField = screen.getByPlaceholderText('E-mail')
    const emailConfirmField = screen.getByPlaceholderText('Confirme seu E-mail')
    const passwordField = screen.getByPlaceholderText('Senha')
    const passwordConfirmField =
      screen.getByPlaceholderText('Confirme sua Senha')

    await userEvent.type(userField, 'teste da silva')
    await userEvent.type(emailField, 'teste@mail.com')
    await userEvent.type(emailConfirmField, 'teste@mail.com')
    await userEvent.type(passwordField, 'Void@@68465')
    await userEvent.type(passwordConfirmField, 'Void@@68465')

    const button = screen.getByText('Seguir')
    await userEvent.click(button)

    expect(screen.getByText('Erro no cadastro')).toBeTruthy()
    expect(screen.getByText('Erro no cadastro')).toBeInTheDocument()
    expect(screen.getByText('Erro no cadastro')).toBeVisible()

    expect(mockNavigate).not.toHaveBeenCalled()

    // Restaura console.log
    consoleLogMock.mockRestore()
  })

  test('Should be able to register a new user', async () => {
    apiMock.onPost('/user/create').reply(201, {})

    render(
      <>
        <Cadastro />
        <ToastContainer />
      </>,
    )

    const userField = screen.getByPlaceholderText('Usuario')
    const emailField = screen.getByPlaceholderText('E-mail')
    const emailConfirmField = screen.getByPlaceholderText('Confirme seu E-mail')
    const passwordField = screen.getByPlaceholderText('Senha')
    const passwordConfirmField =
      screen.getByPlaceholderText('Confirme sua Senha')

    await userEvent.type(userField, 'teste da silva')
    await userEvent.type(emailField, 'teste@mail.com')
    await userEvent.type(emailConfirmField, 'teste@mail.com')
    await userEvent.type(passwordField, 'Void@@68465')
    await userEvent.type(passwordConfirmField, 'Void@@68465')

    const button = screen.getByText('Seguir')
    await userEvent.click(button)

    expect(screen.getByText('Cadastro realizado com sucesso!')).toBeTruthy()
    expect(
      screen.getByText('Cadastro realizado com sucesso!'),
    ).toBeInTheDocument()
    expect(screen.getByText('Cadastro realizado com sucesso!')).toBeVisible()

    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })
})
