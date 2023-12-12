import styled from 'styled-components'
import { Color } from '../../theme'

export const LanguageMenu = styled.div`
  padding: 0.5%;
  left: 18px;
  border-radius: 5px;
  position: absolute;
  background-color: #f1f1f1;
  width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: ${Color.GREY_600};

  ${({ show }) =>
    show
      ? `
      display: block;
      visibility: visible;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity 300ms;
      `
      : `
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s linear 300ms, opacity 300ms;
      `}
`

export const MenuItem = styled.li`
  list-style-type: none;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out 0.1s;

  &:hover,
  &:focus {
    background-color: ${Color.GREY_200};
  }

  ${({ selected }) =>
    selected &&
    `
  color: ${Color.GREY_400};
  transition: all 0.2s ease-in-out 0.1s;
`}
`
