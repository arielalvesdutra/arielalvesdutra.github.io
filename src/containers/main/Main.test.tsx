import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from './Main'

describe('Containers: Main', () => {

  test('render should work', () => {
    const main = (
      <Main mainTitle="Sobre">
        <>
          <h2>Geral</h2>
          <p>Informações gerais</p>
        </>
      </Main>
    )
    const { getByText } = render(main)

    expect(getByText("Sobre")).toBeInTheDocument()
    expect(getByText("Geral")).toBeInTheDocument()
    expect(getByText("Informações gerais")).toBeInTheDocument()
  })
  
})
