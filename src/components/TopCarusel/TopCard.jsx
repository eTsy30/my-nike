import React from 'react'
import styled from 'styled-components'
import Shoe from '../../assets/Img/yellowshoe.png'
import { ReactComponent as Button } from '../../assets/Icon/buttonround.svg'

const Container = styled.div`
  background: #efefef;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  width: 392.64px;
  height: 580px;
  margin-right: 55px;
  img {
    position: relative;
    width: 324px;
    z-index: 2;
    top: -218px;
    left: -20px;
    margin: 0 auto;
    display: block;
  }
  p {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 900;
    font-size: 160px;
    line-height: 240px;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0;
    position: relative;
    top: 165px;
    color: rgba(0, 0, 0, 0.1);
    transform: matrix(0, 1, -1, 0, 0, 0);
    z-index: 0;
  }
  svg {
    position: relative;
    left: 210px;
    top: -72px;
  }
`
const Title = styled.h4`
  margin: 0px 0px 0px 36px;
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: #000000;
  position: relative;
  top: -120px;
`
const Price = styled.span`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  position: relative;
  top: -127px;
  margin-left: 37px;
`

export function TopCard() {
  return (
    <Container>
      <p>NIKE</p>
      <img src={Shoe} alt={Shoe} />
      <Title>Air Max 97</Title>
      <Price>$20.99</Price>
      <Button />
    </Container>
  )
}
