import * as S from './styles'

type Props = {
  capa: string
  titulo: string
  tipo: string
}

const Banner = ({ capa, titulo, tipo }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${capa})`, objectFit: 'cover' }}>
      <div className="container">
        <S.Category>{tipo}</S.Category>
        <S.Title>{titulo}</S.Title>
      </div>
    </S.Banner>
  )
}

export default Banner
