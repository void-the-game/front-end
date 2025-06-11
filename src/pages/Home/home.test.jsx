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

describe ('Homepage Security Tests',() => {
  test('User token verification should be enabled', () => {
    
    localStorage.setItem('@Void:token', 'fake-jwt-token');
    localStorage.setItem('@Void:user', 'fake-user');
    render(<Home/>)

    expect(screen.getByText('fake-user')).toBeTruthy()
    expect(screen.getByText('fake-user')).toBeInTheDocument()
    expect(screen.getByText('fake-user')).toBeVisible()

    localStorage.clear() 
  })

  test('Should not be able to show user', () => {
  render(<Home/>)
  
  expect(screen.getByText('Entrar')).toBeInTheDocument()
  expect(screen.getByText('Entrar')).toBeVisible()

  expect(screen.getByText('Criar Conta')).toBeInTheDocument()
  expect(screen.getByText('Criar Conta')).toBeVisible()
  })
}) 

