import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  background: '#FFF8F2',
  primaria: '#E66767',
  secundaria: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '450px'
}

const EstiloGlobal = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;

  }

  body{
    background-color: ${cores.background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
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

export default EstiloGlobal
