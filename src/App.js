import React from 'react'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
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
      <Contact />
    </>
  )
}

export default App
