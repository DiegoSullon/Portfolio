import React from 'react'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <ProjectsGrid />
    </>
  )
}

export default App
