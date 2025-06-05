import { render, screen } from '@testing-library/react'
import React from 'react'
import CustomButton from './CustomButton'

describe('Testing Custom Button Component', () => {
  test('Should be able to render the button', () => {
    render(<CustomButton onClick={() => {}}>Botão</CustomButton>)

    expect(screen.getByText('Botão')).toBeTruthy()
  })
})
