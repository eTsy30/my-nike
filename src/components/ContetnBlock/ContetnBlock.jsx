import React from 'react'
import styled from 'styled-components'
import { PromoCard } from '../PromoCard/PromoCard'
import { TopCarusel } from '../TopCarusel/TopCarusel'
import { TabletContent } from '../TabletContent/TabletContent'
import { Discount } from '../Discount/Discount'

const Container = styled.div`
  width: 100%;
  position: relative;
  top: -25px;
`
const PromoBoot = styled.div`
  display: flex;
  height: 100%;
  & > .mySwiper {
    overflow-x: visible;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: center;
  }
`
const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 67px;
  & > p {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 49px;
    color: #000000;
  }
  & > h4 {
    font-style: italic;
    font-weight: 900;
    font-size: 80px;
    line-height: 98px;
    color: #000000;
    margin: 0px;
  }
  @media (max-width: 1000px) {
    margin-top: 0px;
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
    h4 {
      font-style: italic;
      font-weight: 900;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
    }
  }
`
export function ContetnBlock() {
  return (
    <Container>
      <PromoBoot>
        <PromoCard />
        <PromoCard />
      </PromoBoot>
      <Label>
        <p>At the moment</p>
        <h4>SUMMERTIME MOOD</h4>
        <p>Fight the heat in a sunny look!</p>
      </Label>
      <TopCarusel />
      <TabletContent />
      <Discount />
    </Container>
  )
}
