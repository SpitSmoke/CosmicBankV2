import React from 'react'
import { GlobalStyle } from './styles/EstiloGlobal'
import Header from './components/header'
import Hero from './components/hero'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default App
