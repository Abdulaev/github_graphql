import React from 'react'
import SpinnerIcon from 'assets/images/spinner.png'
import { Container, StyledImage } from './Spinner.style'

interface SpinnerProps {
  small?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({ small = false }) => {
  return (
    <Container small={small}>
      <StyledImage src={SpinnerIcon} alt='' />
    </Container>
  )
}
