/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { ProjectGroup, ProjectTitle, ProjectTitleImg, ProjectTitleText, Technologies, TechnologiesImg, TechnologiesItem } from './styles'

const ProjectCard = () => {
  return (
    <ProjectGroup>
      <ProjectTitle>
        <ProjectTitleText>BodyHealthy</ProjectTitleText>
        <a href='https://github.com/PedigreeTeam/BodyHealthy' target='_blank'>
          <ProjectTitleImg src='https://i.ibb.co/84zSfWQ/git.png' alt='git icon' />
        </a>
      </ProjectTitle>
      <a href='https://bodyhealthy-app.herokuapp.com/' target='_blank'>
        <img
          className='project-image'
          src='https://i.ibb.co/QMbxDZF/bodyhealthy.png'
          alt='project image'
        />
      </a>
      <Technologies>
        <TechnologiesItem>
          <TechnologiesImg
            src='https://i.ibb.co/dk3ymmV/angular-logo-icon-169595.png'
            alt=''
          />
        </TechnologiesItem>
        <TechnologiesItem><TechnologiesImg src='https://i.ibb.co/TkFrtJy/spring-logo.png' alt='' /></TechnologiesItem>
        <TechnologiesItem><TechnologiesImg src='https://i.ibb.co/1YNQ1Hz/jwt.png' alt='' /></TechnologiesItem>
        <TechnologiesItem><TechnologiesImg src='https://i.ibb.co/68qC0cF/cloudinary.png' alt='' /></TechnologiesItem>
      </Technologies>
    </ProjectGroup>
  )
}

export default ProjectCard
