import React from 'react'
import { Wrapper } from './styles'

export const Space = ({
  /* MOBILE FIRST */
  mobile = {
    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  },
  tablet = {
    margin: null,
    marginTop: null,
    marginRight: null,
    marginLeft: null,
    marginBottom: null,
    padding: null,
    paddingTop: null,
    paddingBottom: null,
    paddingRight: null,
    paddingLeft: null
  },
  desktop = {
    margin: null,
    marginTop: null,
    marginRight: null,
    marginLeft: null,
    marginBottom: null,
    padding: null,
    paddingTop: null,
    paddingBottom: null,
    paddingRight: null,
    paddingLeft: null
  },
  children
}) => {
  return (
    <Wrapper
      data-testid="space-wrapper"
      mobile={mobile}
      tablet={tablet}
      desktop={desktop}
    >
      {children}
    </Wrapper>
  )
}
