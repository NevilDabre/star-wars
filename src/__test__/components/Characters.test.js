import React from 'react'
import { render, fireEvent, screen } from '../test-utils'
import Characters from '../../components/Characters'

it('Renders the connected app with initialState', () => {
  render(<Characters />, { initialState: { } })
})
