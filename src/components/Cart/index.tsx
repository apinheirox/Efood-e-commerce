import Button from '../Button'
import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCart, removeToCart } from '../../store/reducers/cart'
import { formataPreco } from '../Products'

const Cart = () => {
  const dispatch = useDispatch()

  const toCloseCart = () => {
    dispatch(closeCart())
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.preco!)
    }, 0)
  }

  const toRemoveItem = (id: number) => {
    dispatch(removeToCart(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={toCloseCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>

                <span>{formataPreco(item.preco)}</span>
              </div>
              <button type="button" onClick={() => toRemoveItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Prices>
          Valor total: <span>{formataPreco(getTotalPrice())}</span>
        </S.Prices>
        <Button title="Clique aqui para continuar a compra">
          Continuar com a entrega
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
