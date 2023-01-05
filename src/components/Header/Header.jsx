import React from 'react'
import styled from 'styled-components'
import { baseTheme } from '../../theme'
import { ReactComponent as Exit } from '../../assets/Icon/exit.svg'
import { ReactComponent as Base } from '../../assets/Icon/base.svg'
import { ReactComponent as Search } from '../../assets/Icon/search.svg'
import { ReactComponent as Menu } from '../../assets/Icon/menu.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${baseTheme.colors.primary};
  height: 79px;
  width: 100%;
  @media (max-width: 1000px) {
  }
  @media (max-width: 375px) {
  }
`
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    display: none;
    margin-left: 50px;
  }
  @media (max-width: 1000px) {
    svg {
      display: block;
      margin-left: 50px;
    }
  }
  @media (max-width: 375px) {
    svg {
      display: block;
      margin-left: 20px;
    }
  }
`
const Item = styled.div`
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  margin-right: 50px;
  border-bottom: ${(props) => (props.isActive ? '2px solid #000000' : 'none')};
  font-weight: ${(props) => (props.isActive ? '700' : '400')};
  &:nth-child(2) {
    margin-left: 50px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: none;
  }
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0px 50px;
  @media (max-width: 1000px) {
    margin: 0px 35px;
  }
  @media (max-width: 375px) {
    margin: 0px 20px;
  }
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
  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 32px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
    line-height: 24px;
  }
`
const IconContainer = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  & > svg {
    margin-right: 50px;
  }
  @media (max-width: 1000px) {
    svg:not(:last-child) {
      display: none;
      margin-right: 20px;
    }
  }
  @media (max-width: 375px) {
    svg:not(:last-child) {
      display: none;
      margin-right: 20px;
    }
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
        <Menu />
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
        <Search />
        <Base />
      </IconContainer>
    </Container>
  )
}
