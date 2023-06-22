class Product {
  idProduct: number
  imageProduct: string
  titleProduct: string
  descriptionProduct: string

  constructor(
    idProduct: number,
    imageProduct: string,
    titleProduct: string,
    descriptionProduct: string
  ) {
    this.idProduct = idProduct
    this.imageProduct = imageProduct
    this.titleProduct = titleProduct
    this.descriptionProduct = descriptionProduct
  }
}

export default Product
