import { render, screen } from '@testing-library/react'
import React from 'react'
import BotaoAudio from './botaoAudio'

describe('Testing Audio Button Component', () => {
  test('Should be able to render the audio button', () => {
    window.HTMLMediaElement.prototype.play = vi.fn()
    window.HTMLMediaElement.prototype.pause = vi.fn()

    render(<BotaoAudio />)

    expect(screen.getByLabelText('Desativar mudo')).toBeTruthy()
  })
})
