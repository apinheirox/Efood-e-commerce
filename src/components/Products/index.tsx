import * as S from './styles'

type Props = {
  imageProduct: string
  titleProduct: string
  descriptionProduct: string
}

const Products = ({
  imageProduct,
  titleProduct,
  descriptionProduct
}: Props) => {
  return (
    <S.ContainerProduct>
      <div>
        <img src={imageProduct} alt="" />
        <S.TitleProduct>{titleProduct}</S.TitleProduct>
        <S.DescriptionProduct>{descriptionProduct}</S.DescriptionProduct>
        <S.BtnProduct>Adicionar ao carrinho</S.BtnProduct>
      </div>
    </S.ContainerProduct>
  )
}

export default Products
