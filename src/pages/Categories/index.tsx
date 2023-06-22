import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductList from '../../containers/ProductList'
import Product from '../../models/Product'

import pizza from '../../assets/images/pizza.png'
import Footer from '../../components/Footer'

const products: Product[] = [
  {
    idProduct: 1111,
    imageProduct: `${pizza}`,
    titleProduct: 'Pizza Marguerita',
    descriptionProduct:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    idProduct: 2222,
    imageProduct: `${pizza}`,
    titleProduct: 'Pizza Marguerita',
    descriptionProduct:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    idProduct: 3333,
    imageProduct: `${pizza}`,
    titleProduct: 'Pizza Marguerita',
    descriptionProduct:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    idProduct: 444,
    imageProduct: `${pizza}`,
    titleProduct: 'Pizza Marguerita',
    descriptionProduct:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    idProduct: 5555,
    imageProduct: `${pizza}`,
    titleProduct: 'Pizza Marguerita',
    descriptionProduct:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    idProduct: 6666,
    imageProduct: `${pizza}`,
    titleProduct: 'Pizza Marguerita',
    descriptionProduct:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Categories = () => {
  return (
    <>
      <Header
        alternativeStyle={true}
        alternativeContent={true}
        alternativeSubtitle={true}
      />
      <Banner category="italiana" title="La Dolce Vita Trattoria" />
      <ProductList foods={products} />
      <Footer />
    </>
  )
}
export default Categories
