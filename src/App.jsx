/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import { Header } from './components/Header/Header'
import { GlobalStyle } from './GlobalStyle'
import { LabelImg } from './components/LabelImg/LabelImg'
import { PreViewLogo } from './components/PreViewLogo/PreViewLogo'
import { ContetnBlock } from './components/ContetnBlock/ContetnBlock'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <LabelImg />
      <PreViewLogo />

      <ContetnBlock />
    </>
  )
}

export default App
