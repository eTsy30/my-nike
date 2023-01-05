/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-quotes */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import styled from 'styled-components'
import Bglabel from '../../assets/Img/bglabel.png'
import BglabelColor from '../../assets/Img/Slice1.png'
import BglabelBlack from '../../assets/Img/Slice2.png'
import StringRun from '../../assets/Img/Rectangle.svg'

const LabelImgContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  background-image: url(${Bglabel});
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  @media (max-width: 1000px) {
    background-image: url(${BglabelBlack});
    background-size: cover;
    justify-content: center;
  }
  @media (max-width: 375px) {
    background-image: url(${BglabelBlack});
    background-size: cover;
    height: 165px;
    justify-content: center;
  }
`
const Label = styled.span`
  font-style: italic;
  font-weight: 900;
  font-size: 40px;
  line-height: 49px;
  color: #ffffff;
  margin-left: 50px;
  @media (max-width: 1000px) {
    font-weight: 600;
    font-size: 30px;
  }
  @media (max-width: 375px) {
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    margin-left: 20px;
  }
`

const Text = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  margin-left: 50px;
  color: #ffffff;
  width: 50%;
  @media (max-width: 1000px) {
    font-size: 17px;
  }
  @media (max-width: 375px) {
    font-weight: 900;
    font-size: 12px;
    line-height: 15px;
    margin-left: 20px;
    width: 80%;
  }
`
const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  background: #ffffff;
  border-radius: 16px;
  margin-left: 50px;
  @media (max-width: 1000px) {
    width: 115px;
    height: 30px;
  }
  @media (max-width: 375px) {
    width: 115px;
    height: 30px;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    margin-left: 20px;
  }
`
const LeftSide = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
`

const RightSide = styled.img`
  display: none;
  @media (max-width: 375px) {
    display: block;
    width: 100%;
    height: 165px;
  }
`
const Marquee = styled.marquee`
  & > img {
    width: 100%; /* or any custom size */
    height: 100%;
    object-fit: contain;
  }
`
export function LabelImg() {
  return (
    <>
      <RightSide src={BglabelColor} />

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
      <Marquee behavior="alternate">
        <img src={StringRun} alt={StringRun} />
      </Marquee>
    </>
  )
}
