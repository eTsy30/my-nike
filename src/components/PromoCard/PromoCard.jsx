import React from 'react'
import styled from 'styled-components'
import { baseTheme } from '../../theme'
import { ReactComponent as Button } from '../../assets/Icon/buttonround.svg'
import imageboot from '../../assets/Img/nike-air-max-270-sunset-dq7625-600_w380-removebg-preview 3.png'

const Container = styled.div`
  width: 602.07px;
  height: 272.39px;
  background: ${baseTheme.colors.cardColor};
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  margin-left: 67px;
`
const PromoLabel = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  color: #ff3939;
  margin: 60px 0px 0px 0px;
`
const Label = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #000000;
`
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  margin-left: 66px;
  justify-content: center;
  & > svg {
    align-self: center;
    margin: 15px;
    padding-right: 50px;
  }
`
const BootPicture = styled.img`
  position: relative;
  top: -385px;
  left: 150px;
`

export function PromoCard() {
  return (
    <Container>
      <LeftSide>
        <PromoLabel>NEW</PromoLabel>
        <Label>IR JORDAN 1 MID LIGHT SMOKE GREY</Label>
        <Button />
      </LeftSide>
      <BootPicture src={imageboot} alt={imageboot} />
    </Container>
  )
}
