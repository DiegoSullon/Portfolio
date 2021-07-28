import styled from 'styled-components'

export const BannerSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;
`
export const BannerImage = styled.img`
  height: 100%;
`
export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 35%;
  text-align: center;

  @media (max-height: 810px) {
    top: 30%;
  }
  @media (max-height: 600px) {
    top: 20%;
  }
  @media (max-height: 500px) {
    top: 15%;
  }
`
export const BannerHeader = styled.h1`
  margin-top: 70px;
  margin-bottom: 0;
`
export const BannerSubtitle = styled.p`
  margin-top: 0px;
  color: #093b52;
`
