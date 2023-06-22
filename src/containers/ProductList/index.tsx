import Product from '../../models/Product'
import Products from '../../components/Products'
import * as S from './styles'

type Props = {
  foods: Product[]
}

const ProductList = ({ foods }: Props) => {
  return (
    <S.ProductListContainer>
      <div className="container">
        <S.ProductList>
          {foods.map((food) => (
            <Products
              key={food.idProduct}
              titleProduct={food.titleProduct}
              descriptionProduct={food.descriptionProduct}
              imageProduct={food.imageProduct}
            />
          ))}
        </S.ProductList>
      </div>
    </S.ProductListContainer>
  )
}

export default ProductList
