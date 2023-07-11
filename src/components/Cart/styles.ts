import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.primaria};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonLink} {
    display: block;
    max-width: 100%;
    width: 100%;
    margin: 0;
    background-color: ${cores.secundaria};
    color: ${cores.primaria};
    font-weight: bold;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  margin-bottom: 24px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 12px;
    color: ${cores.secundaria};
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.secundaria};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  h3 {
    color: ${cores.primaria};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }
  span {
    display: block;
    color: ${cores.primaria};
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
