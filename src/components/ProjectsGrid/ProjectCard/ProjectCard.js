import React from 'react'
import { ProjectGroup, ProjectImg, ProjectTitle, ProjectTitleImg, ProjectTitleText, Technologies, TechnologiesImg, TechnologiesItem } from './styles'

const ProjectCard = ({ project }) => {
  const { name, links, image, technologies } = project
  return (
    <ProjectGroup>
      <ProjectTitle>
        <ProjectTitleText>{name}</ProjectTitleText>
        <a href={links.github} target='_blank' rel='noopener noreferrer'>
          <ProjectTitleImg src='https://i.ibb.co/84zSfWQ/git.png' alt='git icon' />
        </a>
      </ProjectTitle>
      <a href={links.website} target='_blank' rel='noopener noreferrer'>
        <ProjectImg
          className='project-card-image'
          src={image}
          alt='project image'
        />
      </a>
      <Technologies>
        {technologies && Array.isArray(technologies) && technologies.map((tech, i) => (
          <TechnologiesItem key={i}><TechnologiesImg src={tech.icon} alt={tech.name} /></TechnologiesItem>
        ))}
      </Technologies>
    </ProjectGroup>
  )
}

export default ProjectCard
