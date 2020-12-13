import styled, {keyframes} from 'styled-components'

export const CardContainer = styled.div `
    margin: 16px;
    border: 1px solid lightgray;
    box-sizing: border-box;
    position: relative;
`

export const ProfileImg = styled.img `
  width: 100%;
  display: block;
  height: 400px; 
  z-index: 1;
`

export const ProfileInfo = styled.div `
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  width: 100%;
  z-index: 2;
  position: absolute;
  bottom: 0px;
`

const AppLogoSpin = keyframes `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const AppLogo = styled.img `
  margin-top: 80px;
  height: 80px;
  pointer-events: none;
  animation: ${AppLogoSpin} infinite 20s linear;
`