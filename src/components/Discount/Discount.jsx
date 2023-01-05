import React from 'react'
import styled from 'styled-components'
import { DiscountCard } from './DiscountCard'
import GreyBoot from '../../assets/Img/Grey.png'
import GreenBoot from '../../assets/Img/nike-air-max-270-sunset-dq7625-600_w380-removebg-preview 3.png'

const Container = styled.div`
  margin-top: 100px;
  @media (max-width: 1000px) {
    margin-top: 10px;
  }
`
const Label = styled.p`
  text-align: center;
  font-style: italic;
  font-weight: 900;
  font-size: 40px;
  line-height: 49px;
  color: #000000;
  @media (max-width: 1000px) {
    font-style: italic;
    font-weight: 7x00;
    font-size: 13px;
    line-height: 29px;

    color: #000000;
  }
`
const DiscountWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`

export function Discount() {
  return (
    <Container>
      <Label>LOOKS GOOD. RUNS GOOD. FEELS GOOD.</Label>
      <DiscountWrapper>
        <DiscountCard image={GreenBoot} />
        <DiscountCard image={GreyBoot} />
      </DiscountWrapper>
    </Container>
  )
}
