import React from 'react'
import styled from 'styled-components'
import BG from '../../assets/Img/imagebg.png'

const Label = styled.p`
  margin-left: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  text-transform: uppercase;
  color: #000000;
  @media (max-width: 1000px) {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    margin: 0px 0px 10px 20px;
  }
`
const Contetn = styled.div`
  height: 324px;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  & > h4 {
    font-style: italic;
    font-weight: 900;
    font-size: 40px;
    line-height: 49px;
    color: #ffffff;
  }
  & > span {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }

  p {
    margin: 0;
  }
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 0px 20px 20px;
    box-sizing: border-box;
    h4 {
      font-style: italic;
      font-weight: 900;
      font-size: 16px;
      line-height: 20px;
      margin: 0px;
      color: #ffffff;
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #ffffff;
    }
  }
`
const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #ffffff;
  border-radius: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  border: none;
  margin-top: 25px;
  @media (max-width: 1000px) {
    width: 70px;
    height: 25px;
    background: #ffffff;
    border-radius: 5px;
  }
`
export function PreFooter() {
  return (
    <>
      <Label>More Nike products</Label>
      <Contetn>
        <h4>YOUR NIKE MEMBERSHIP</h4>
        <span>
          Join our members and show your love with
          <p>
            <b> Nike By You!</b>
          </p>
        </span>
        <Button>Join Us</Button>
      </Contetn>
    </>
  )
}
