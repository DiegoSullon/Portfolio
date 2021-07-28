import styled from 'styled-components'

export const ProjectGroup = styled.div`
  height: 100%;
  margin-bottom: 1em;
  @media (min-width: 700px) {
    margin: 0;
  }
`
export const ProjectTitle = styled.header`
  text-align: center;
  margin: 0;
  background-color: #21262b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProjectTitleImg = styled.img`
  width: auto;
  height: 1.8em;
  margin-top: 2px;
`
export const ProjectTitleText = styled.h3`
  margin: 0;
  padding: 0.8rem;
`
export const Technologies = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0.2rem 0rem;
  margin: 0;
  margin-top: -0.45rem;
  width: 100%;
  background-color: #21262b;
  align-items: center;
`
export const TechnologiesItem = styled.li`
  display: flex;
`
export const TechnologiesImg = styled.img`
  width: auto;
  height: 1.8em;
`
