import React from 'react'
import { render, fireEvent, screen } from '../test-utils'
import ListOfMovies from '../../components/ListOfMovies'

it('Renders the connected app with initialState', () => {
  render(<ListOfMovies />, { initialState: { } })
})
