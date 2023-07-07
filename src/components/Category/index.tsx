import Tag from '../Tag'
import * as S from './styles'
import Button from '../Button'

import star from '../../assets/images/star.svg'
import { Food } from '../../pages/Home'

type Props = {
  food: Food
}

const Category = ({ food }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 210) {
      return description.slice(0, 207) + '...'
    }
  }

  return (
    <S.ContainerProduct>
      {food.destacado && <Tag size="big">Mais vendido</Tag>}
      <img src={food.capa} alt="foto do produto" />
      <Tag size="small">{food.tipo}</Tag>
      <S.NomeENotaContainer>
        <h3>{food.titulo}</h3>
        <div>
          <span>{food.avaliacao}</span>
          <span>
            <img src={star} alt="estrela" />
          </span>
        </div>
      </S.NomeENotaContainer>
      <S.Text>{getDescription(food.descricao)}</S.Text>
      <Button
        title="clique aqui para ir para a página do produto"
        to={`/product/${food.id}`}
      >
        Saiba mais
      </Button>
    </S.ContainerProduct>
  )
}

export default Category
