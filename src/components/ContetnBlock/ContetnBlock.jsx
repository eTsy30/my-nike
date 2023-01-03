import React from 'react'
import styled from 'styled-components'
import { PromoCard } from '../PromoCard/PromoCard'
import { TopCarusel } from '../TopCarusel/TopCarusel'
import { TabletContent } from '../TabletContent/TabletContent'
import { Discount } from '../Discount/Discount'

const Container = styled.div`
  width: 1440px;
  margin-left: 50px;
  position: relative;
  top: -25px;
`
const PromoBoot = styled.div`
  display: flex;
  height: 100%;

  & > .mySwiper {
    overflow-x: visible;
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
