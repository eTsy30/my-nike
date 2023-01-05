/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/Icon/Vlogo.svg'

const Container = styled.div`
  width: 100%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    svg {
      width: 25%;
    }
  }
`
const LeftSide = styled.div`
  display: flex;
  margin-left: 50px;
  flex-direction: column;

  & > a {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: white;
    padding-bottom: 25px;
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    padding-bottom: 10px;
    margin-left: 20px;
  }
`
const RightSide = styled.div`
  display: flex;
  margin-right: 50px;
  flex-direction: column;
  & > a {
    padding-bottom: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: white;
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    padding-bottom: 10px;
    margin-left: 20px;
  }
`
export function Footer() {
  return (
    <Container>
      <LeftSide>
        <a href="#">ALL</a>
        <a href="#">WOMAN</a>
        <a href="#">MAN</a>
      </LeftSide>
      <Logo />
      <RightSide>
        <a href="#">WORKOUT</a>
        <a href="#">RUN</a>
        <a href="#">FOOTBALL</a>
      </RightSide>
    </Container>
  )
}
