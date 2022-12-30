/* eslint-disable comma-dangle */
/* eslint-disable no-console */
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ArrowLeft } from '../../assets/Icon/Arrowleft.svg'
import { TopCard } from './TopCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;
  & > p {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: #000000;
    margin: 0px;
  }
`
const ArrowContainer = styled.div`
  svg:nth-child(even) {
    transform: rotate(180deg);
    margin-left: 25px;
  }
  rect:hover {
    fill: #c6c6c6;
  }
`
const CardContainer = styled.div`
  display: flex;
`

export function TopCarusel() {
  return (
    <Container>
      <LabelContainer>
        <p>Top sneakers</p>
        <ArrowContainer>
          <ArrowLeft />
          <ArrowLeft />
        </ArrowContainer>
      </LabelContainer>
      <CardContainer>
        <TopCard />
        <TopCard />
        <TopCard />
      </CardContainer>
    </Container>
  )
}
