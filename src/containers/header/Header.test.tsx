import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Header from './Header'

describe('Containers: Header', () => {

  test('render should work', () => {
    const { getByText } = render(
      <Router history={createMemoryHistory()} >
        <Header />
      </Router>
    )

    expect(getByText("Ariel Alves Dutra")).toBeInTheDocument()
    expect(getByText("Desenvolvedor Web")).toBeInTheDocument()
    expect(getByText("Sobre")).toBeInTheDocument()
    expect(getByText("Contatos")).toBeInTheDocument()
  })
})
