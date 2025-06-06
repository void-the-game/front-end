import { render, screen } from '@testing-library/react'
import React from 'react'
import Bolinhas from './Bolinhas'

describe('Testing Bolinhas Component', () => {
  test('Should be able to render colored bolinhas', () => {
    render(<Bolinhas isColored={true} />)

    const bolinhas = screen.getAllByTestId('bolinha')
    expect(bolinhas.length).toBeGreaterThan(0)

    bolinhas.forEach((bolinha) => {
      expect(bolinha.style.backgroundColor).not.toBe('white')
    })
  })
})
