import React from 'react'
import { render, fireEvent, screen } from '../test-utils'
import NameYearMovie from '../../components/NameYearMovie'

it('Renders the connected app with initialState', () => {
  render(<NameYearMovie />, { initialState: { } })
})
