import React from 'react'
import { LogoContainer, LogoImage, LogoText, StyledHeader } from '../styles/HeaderStyle'
import booksLogo from '../public/images/booksLogo.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <LogoContainer>
        <LogoImage src={booksLogo.src} alt="Books Logo" />
        <LogoText>MyBookCrud</LogoText>
      </LogoContainer>
    </StyledHeader>
  )
}

export default Header