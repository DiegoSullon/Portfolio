import React from 'react'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
    </>
  )
}

export default App
