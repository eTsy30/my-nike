import React from 'react'
import styled from 'styled-components'
import Shoe from '../../assets/Img/yellowshoe.png'
import { ReactComponent as Button } from '../../assets/Icon/buttonround.svg'

const Container = styled.div`
  background: #efefef;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  max-width: 392.64px;
  width: 100%;
  height: 580px;
  margin-right: 55px;
  img {
    width: 100%;
    position: relative;
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
    left: 222px;
    top: -114px;
    z-index: 2;
  }
  @media (max-width: 1000px) {
    width: 167.9px;
    height: 238px;
    p {
      font-family: 'Poppins';
      font-style: italic;
      font-weight: 700;
      font-size: 45px;
      line-height: 120px;
      display: flex;
      align-items: center;
      text-align: center;
      color: rgba(0, 0, 0, 0.1);
      transform: matrix(0, 1, -1, 0, 0, 0);
      position: absolute;
      top: 30px;
      left: 25px;
    }
    img {
      position: relative;
      top: 5px;
      left: -5px;
    }
    svg {
      position: relative;
      left: 1px;
      z-index: 3;
      top: -9px;
      width: 16%;
    }
  }
  @media (max-width: 1000px) {
    width: 80%;
    height: 137px;
    margin: 20px;
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
  @media (max-width: 1000px) {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
    position: relative;
    top: 10px;
    left: -20px;
  }
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
  @media (max-width: 1000px) {
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    position: relative;
    top: -35px;
    left: -22px;
    color: #000000;
  }
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
