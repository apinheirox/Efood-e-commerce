import * as S from './styles'

import bgBanner from '../../assets/images/bg-banner.png'

type Props = {
  category: string
  title: string
}

const Banner = ({ category, title }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${bgBanner})` }}>
      <div className="container">
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
      </div>
    </S.Banner>
  )
}

export default Banner
