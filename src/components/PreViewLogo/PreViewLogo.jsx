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
`
export function PreViewLogo() {
  return (
    <Container>
      <Logo />
    </Container>
  )
}
