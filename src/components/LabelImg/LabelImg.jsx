/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-quotes */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import styled from 'styled-components'
import Bglabel from '../../assets/Img/bglabel.png'
import StringRun from '../../assets/Img/Rectangle.svg'

const LabelImgContainer = styled.div`
  width: 100%;
  height: 300px;

  display: flex;

  background-image: url(${Bglabel});
  background-repeat: no-repeat;
  background-size: cover;
`
const Label = styled.span`
  font-style: italic;
  font-weight: 900;
  font-size: 40px;
  line-height: 49px;
  color: #ffffff;
  margin-left: 50px;
`
const Text = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  margin-left: 50px;
  color: #ffffff;
  width: 600px;
`
const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  background: #ffffff;
  border-radius: 16px;
  margin-left: 50px;
`
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export function LabelImg() {
  return (
    <>
      <LabelImgContainer>
        <LeftSide>
          <Label>WE ARE NEVER DONE</Label>
          <Text>
            Celebrating 50 years of Nike from May 16th! Exclusive products,
            experiences and much more await you for five days. Scan and join the
            Nike app!
          </Text>
          <Button>Celebrate with us</Button>
        </LeftSide>
      </LabelImgContainer>

      <marquee behavior="alternate">
        <img src={StringRun} alt={StringRun} />
      </marquee>
    </>
  )
}
