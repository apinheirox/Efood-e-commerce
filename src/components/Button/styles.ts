import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { breakpoints, cores } from '../../styles'

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  background-color: ${cores.primaria};
  color: ${cores.secundaria};
  margin-left: 8px;
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 55px;
  }
`
