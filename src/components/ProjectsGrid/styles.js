import styled from 'styled-components'

export const ProjectsSection = styled.section`
  padding: 1rem;
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  color: white;
  @media (min-width: 700px) {
    grid-template-columns: auto auto;
    grid-column-gap: 1em;
    grid-row-gap: 2em;
  }
`
export const ProjectsHeader = styled.h2`
  text-align: center;
  @media (min-width: 700px) {
    grid-column: 1/3;
  }
`
