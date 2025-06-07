import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from './Home'
import userEvent from '@testing-library/user-event'

// Mock do useNavigate
const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('Testing Home Page Navigation', () => {
  test('Should be able to go to Login Page', async () => {
    render(<Home />)

    const loginButton = screen.getByText('Entrar')

    await userEvent.click(loginButton)

    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })

  test('Should be able to go to Register Page', async () => {
    render(<Home />)

    const registerButton = screen.getByText('Criar Conta')

    await userEvent.click(registerButton)

    expect(mockNavigate).toHaveBeenCalledWith('/register')
  })
})
