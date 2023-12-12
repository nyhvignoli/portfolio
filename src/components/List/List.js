import React from 'react'
import { OrderedList, UnorderedList } from './styles'

export const LIST_VARIANTS = {
  ordered: 'ordered',
  unordered: 'unordered',
  checkmark: 'checkmark'
}

export const List = ({
  variant = LIST_VARIANTS.unordered,
  color,
  paddingInlineStartSmall = false,
  children
}) => {
  if (variant === LIST_VARIANTS.ordered) {
    return <OrderedList>{children}</OrderedList>
  }

  return (
    <UnorderedList
      variant={variant}
      color={color}
      paddingInlineStartSmall={paddingInlineStartSmall}
    >
      {children}
    </UnorderedList>
  )
}
