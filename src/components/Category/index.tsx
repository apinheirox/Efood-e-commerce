import Tag from '../Tag'
import Button from '../Button'
import * as S from './styles'
import star from '../../assets/images/star.svg'

type Props = {
  title: string
  emphasis?: string
  category: string
  description: string
  image: string
  note: string
}

const Category = ({
  title,
  emphasis,
  category,
  description,
  image,
  note
}: Props) => {
  return (
    <S.ContainerProduct>
      {emphasis && <Tag size="big">{emphasis}</Tag>}
      <img src={image} alt="foto do produto" />
      <Tag size="small">{category}</Tag>
      <S.NomeENotaContainer>
        <h3>{title}</h3>
        <div>
          <span>{note}</span>
          <span>
            <img src={star} alt="estrela" />
          </span>
        </div>
      </S.NomeENotaContainer>
      <S.Text>{description}</S.Text>
      <Button
        title="clique aqui para ir para a página do produto"
        to="/categories"
      >
        Saiba mais
      </Button>
    </S.ContainerProduct>
  )
}

export default Category
