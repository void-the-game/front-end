import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Login from '.'

// Mock do useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  }
})

describe('Login Page Unitary Testing', () => {
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
