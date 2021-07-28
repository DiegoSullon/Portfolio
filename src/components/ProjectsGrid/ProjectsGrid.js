import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import { ProjectsHeader, ProjectsSection } from './styles'

const ProjectsGrid = () => {
  return (
    <ProjectsSection id='projects'>
      <ProjectsHeader>These are some of my projects</ProjectsHeader>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ProjectsSection>
  )
}

export default ProjectsGrid
