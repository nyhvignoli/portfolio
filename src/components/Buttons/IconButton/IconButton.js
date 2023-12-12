import React from 'react'
import { Button } from './styles'

export const IconButton = ({
  children,
  testId,
  hideOnMobile,
  disabled,
  onClick = () => {}
}) => {
  return (
    <Button
      data-testid={testId}
      hideOnMobile={hideOnMobile}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
