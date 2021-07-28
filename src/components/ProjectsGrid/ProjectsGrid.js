import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import { ProjectsHeader, ProjectsSection } from './styles'
import Projects from '../../projects'
const ProjectsGrid = () => {
  const projects = Projects
  return (
    <ProjectsSection id='projects'>
      <ProjectsHeader>These are some of my projects</ProjectsHeader>
      {projects && Array.isArray(projects) && projects.map((p) => {
        return <ProjectCard key={p.id} project={p} />
      })}
    </ProjectsSection>
  )
}

export default ProjectsGrid
