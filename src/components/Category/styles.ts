import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerProduct = styled.div`
  height: 402px;
  width: 474.7px;
  border: 1px solid ${cores.primaria};
  position: relative;
  margin-bottom: 48px;
  background-color: #fff;

  > img {
    width: 472px;
    height: 217px;
    object-fit: cover;
  }
`

export const NomeENotaContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    width: 100%;
    height: 21px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: ${cores.primaria};
    margin: 8px 0 16px 8px;
  }

  div {
    margin: 8px 8px 16px 0;
    display: flex;
    gap: 8px;

    & > span {
      width: 26px;
      height: 21px;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      color: ${cores.primaria};
    }
  }
`
export const Text = styled.p`
  height: 88px;
  width: 456px;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.primaria};
  margin-bottom: 16px;
  margin-left: 8px;
`
