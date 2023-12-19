import React from 'react'
import { LoadingSpinner, SpinnerContainer } from '../styles/SpinnerStyle'

type Props = {}

const Spinner = (props: Props) => {
  return (
    <SpinnerContainer>
      <LoadingSpinner>
      </LoadingSpinner>
    </SpinnerContainer>
  )
}

export default Spinner