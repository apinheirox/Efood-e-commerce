import { Link } from 'react-router-dom'

import * as S from './styles'
import bg from '../../assets/images/bg-hero.png'
import logo from '../../assets/images/logo.svg'

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
  const headerStyle = alternativeStyle ? 'alternative-header' : 'default-header'
  const additionalParagraph = alternativeContent
    ? '0 pedidos no carrinho'
    : null
  const subtitle = alternativeSubtitle ? (
    <Link to="/">Restaurantes</Link>
  ) : (
    'Viva experiências gastronômicas no conforto da sua casa'
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
