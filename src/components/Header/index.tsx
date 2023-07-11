import { Link } from 'react-router-dom'

import * as S from './styles'
import bg from '../../assets/images/bg-hero.png'
import logo from '../../assets/images/logo.svg'
import { openCart } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  alternativeStyle?: boolean
  alternativeContent?: boolean
  alternativeSubtitle?: boolean
}

const Header: React.FC<Props> = ({
  alternativeStyle,
  alternativeContent,
  alternativeSubtitle
}) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const toOpenCart = () => {
    dispatch(openCart())
  }

  const headerStyle = alternativeStyle ? 'alternative-header' : 'default-header'
  const additionalParagraph = alternativeContent ? (
    <S.LinkCart onClick={toOpenCart}>
      {items.length} pedido(s) no carrinho
    </S.LinkCart>
  ) : null
  const subtitle = alternativeSubtitle ? (
    <Link to="/">Restaurantes</Link>
  ) : (
    <div>Viva experiências gastronômicas no conforto da sua casa</div>
  )

  return (
    <S.Header className={headerStyle} style={{ backgroundImage: `url(${bg})` }}>
      <S.DivContent>
        <p>{additionalParagraph}</p>
        <h1>
          <img src={logo} alt="Logo - efood" />
        </h1>
        <h2>{subtitle}</h2>
      </S.DivContent>
    </S.Header>
  )
}

export default Header
