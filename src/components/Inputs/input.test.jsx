import { render, screen } from '@testing-library/react'
import React from 'react'
import CustomInput from './CustomInputs'

describe('Testing Input Component', () => {
  test('Should be able to render the input', () => {
    render(
      <CustomInput
        placeholder={'Usuário'}
        type="text"
        id={'idUserTest'}
        register={() => {}}
        onChange={() => {}}
      />,
    )

    expect(screen.getByPlaceholderText('Usuário')).toBeTruthy()
  })
})
