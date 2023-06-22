import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerProduct = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.primaria};

  & > div {
    display: flex;
    flex-direction: column;
    padding: 8px;

    & > img {
      margin-bottom: 8px;
    }
  }
`

export const TitleProduct = styled.h3`
  width: 124px;
  height: 19px;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin-bottom: 8px;
  color: #fff;
`

export const DescriptionProduct = styled.p`
  width: 304px;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
  color: #fff;
`

export const BtnProduct = styled.button`
  width: 304px;
  height: 24px;
  background-color: #fff;
  color: ${cores.primaria};
  border: transparent;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
`
