import React from 'react'
import styled from 'styled-components'
import { baseTheme } from '../../theme'
import { ReactComponent as Exit } from '../../assets/Icon/exit.svg'
import { ReactComponent as Base } from '../../assets/Icon/base.svg'
import { ReactComponent as Search } from '../../assets/Icon/search.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${baseTheme.colors.primary};
  height: 79px;
  width: 100%;
`
const Nav = styled.div`
  display: flex;
  flex-direction: row;
`
const Item = styled.div`
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  margin-right: 50px;
  border-bottom: ${(props) => (props.isActive ? '2px solid #000000' : 'none')};
  font-weight: ${(props) => (props.isActive ? '700' : '400')};
  :first-child {
    margin-left: 50px;
  }
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`
const LogoText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a0a0a0;
  & > b {
    color: ${baseTheme.colors.secondary};
  }
`
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  & > svg {
    margin-right: 50px;
  }
`
export function Header() {
  const navbar = [
    { title: 'WOMAN', link: '#', isActive: true },
    { title: 'MEN', link: '#', isActive: false },
    { title: 'ALL', link: '#', isActive: false },
  ]
  return (
    <Container>
      <Nav>
        {navbar.map((item) => (
          <Item key={item.title + new Date()} isActive={item.isActive}>
            {item.title}
          </Item>
        ))}
      </Nav>
      <Logo>
        <LogoText>
          your
          <b>SNEAKER</b>
        </LogoText>
      </Logo>
      <IconContainer>
        <Exit />
        <Base />
        <Search />
      </IconContainer>
    </Container>
  )
}
