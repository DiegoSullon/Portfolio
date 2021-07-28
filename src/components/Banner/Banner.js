import React from 'react'
import { BannerHeader, BannerImage, BannerInfo, BannerSection, BannerSubtitle } from './styles'

const Banner = () => {
  return (
    <BannerSection id='about'>
      <BannerImage
        src='https://i.ibb.co/5WR9YCJ/pexels-tobias-bj-rkli-1693095-1.jpg'
        alt=''
      />
      <BannerInfo>
        <BannerHeader>Diego Sullon</BannerHeader>
        <BannerSubtitle>Web developer</BannerSubtitle>
      </BannerInfo>
    </BannerSection>
  )
}

export default Banner
