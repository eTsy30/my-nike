import React from 'react'
import styled from 'styled-components'
import Oneimg from '../../assets/Img/karlie.png'
import Twoimg from '../../assets/Img/2a.png'
import Treeimg from '../../assets/Img/3a.png'

const Container = styled.div``
const Label = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #000000;
`
const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Line = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  justify-content: space-around;
  & > div {
    text-align: center;

    width: 50%;
    font-style: italic;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: 0.3em;
    color: #000000;
  }
  & > img {
    width: 50%;
    height: 570px;
  }
`

export function TabletContent() {
  return (
    <Container>
      <Label>Buy by category</Label>
      <TableWrapper>
        <Line>
          <div>WORKOUT</div>
          <img src={Oneimg} alt={Oneimg} />
        </Line>
        <Line>
          <img src={Twoimg} alt={Twoimg} />
          <div>RUN</div>
        </Line>
        <Line>
          <div>FOOTBALL</div>
          <img src={Treeimg} alt={Treeimg} />
        </Line>
      </TableWrapper>
    </Container>
  )
}
