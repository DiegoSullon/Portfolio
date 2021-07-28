import React from 'react'
import { ContactHeader, ContactLinks, ContactSection, ContactSubtitle, ProfileImg, ProfileItem, ProfileLink } from './styles'

const Contact = () => {
  return (
    <ContactSection>
      <ContactHeader>Let's work together...</ContactHeader>
      <ContactSubtitle>You can find me in the following links</ContactSubtitle>
      <ContactLinks>
        <ProfileItem>
          <ProfileLink
            href='https://github.com/DiegoSullon'
            alt='github-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ProfileImg src='https://i.ibb.co/tB8Y922/githubW.png' alt='' />
          </ProfileLink>
          <span> GitHub</span>
        </ProfileItem>
        <ProfileItem>
          <ProfileLink
            href='https://www.instagram.com/diego_sullon/'
            alt='instagram-link'
            target='_top'
          >
            <ProfileImg src='https://i.ibb.co/tpJKS7d/instagram-W.png' alt='' />
          </ProfileLink>
          <span>Instagram</span>
        </ProfileItem>

        <ProfileItem>
          <ProfileLink
            href='https://www.facebook.com/jdiegosullon'
            alt='facebook-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ProfileImg src='https://i.ibb.co/vHbNQXP/facebook-W.png' alt='' />
          </ProfileLink>
          <span>Facebook</span>
        </ProfileItem>
        <ProfileItem>
          <ProfileLink
            href='mailto:jdiego.sullon@gmail.com'
            alt='email-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ProfileImg src='https://i.ibb.co/9yWkv1m/emailW.png' alt='' />
          </ProfileLink>
          <span>jdiego.sullon@gmail.com</span>
        </ProfileItem>
      </ContactLinks>
    </ContactSection>
  )
}

export default Contact
