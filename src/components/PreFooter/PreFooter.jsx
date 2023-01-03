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
