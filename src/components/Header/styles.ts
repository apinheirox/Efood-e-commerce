import styled from 'styled-components'

import { cores } from '../../styles/index'

export const Header = styled.header`
  height: 384px;
  width: 100%;

  &.alternative-header {
    height: 186px;

    & > div {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-evenly;
      padding-top: 63px;

      & > p {
        width: 256px;
        height: 21px;
        font-family: Roboto;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
        text-align: right;
        color: ${cores.primaria};
      }

      & > h1 {
        margin-top: 0;
      }

      & > h2 {
        margin-top: 0;
        width: 109px;
        height: 21px;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;

        & > a {
          text-decoration: none;
          color: ${cores.primaria};
        }
      }
    }
  }
`

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 64px;
  }
  h2 {
    margin-top: 138px;
    width: 539px;
    height: 84px;
    font-size: 36px;
    font-weight: bold;
    line-height: 42px;
    text-align: center;
    color: ${cores.primaria};
  }
`