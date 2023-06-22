import Food from '../../models/Food'
import Category from '../../components/Category'
import * as S from './styles'

type Props = {
  categorys: Food[]
}

const CategoryList = ({ categorys }: Props) => {
  return (
    <S.Container>
      <div className="container">
        <S.List>
          {categorys.map((category) => (
            <Category
              key={category.id}
              title={category.title}
              category={category.category}
              description={category.description}
              image={category.image}
              note={category.note}
              emphasis={category.emphasis}
            />
          ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default CategoryList
