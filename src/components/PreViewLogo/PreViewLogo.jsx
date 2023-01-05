import React from 'react'
import styled from 'styled-components'
import BG from '../../assets/Img/bg.png'
import { ReactComponent as Logo } from '../../assets/Icon/Logo.svg'

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > svg {
    display: block;
    margin: 0 auto;
  }
  @media (max-width: 1000px) {
    background-image: url(${BG});
    background-size: cover;
    height: 350px;
    object-fit: contain;
    & > svg {
      display: block;
      margin: 0 auto;
      width: 50%; /* or any custom size */
      height: 50%;
      object-fit: contain;
    }
  }
  @media (max-width: 375px) {
    background-image: url(${BG});
    background-size: cover;
    object-fit: contain;
    height: 165px;
  }
`
export function PreViewLogo() {
  return (
    <Container>
      <Logo />
    </Container>
  )
}
