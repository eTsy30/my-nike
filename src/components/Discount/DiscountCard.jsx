import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 606.59px;
  height: 272.94px;
  left: 50px;
  top: 4614.75px;
  background: #efefef;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
`
const PromoLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #ff3939;
  margin: 60px 0px 0px 0px;
`
const Label = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
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
const Button = styled.button`
  width: 180.24px;
  height: 54.33px;
  background: #000000;
  border-radius: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`

export function DiscountCard({ image }) {
  return (
    <Container>
      <LeftSide>
        <PromoLabel>-20% Discount</PromoLabel>
        <Label>on your first purchase</Label>
        <Button>Shop now</Button>
      </LeftSide>
      <BootPicture src={image} alt={image} />
    </Container>
  )
}
