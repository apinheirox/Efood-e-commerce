import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'

import Footer from '../../components/Footer'
import Products from '../../components/Products'

import { useGetTypeQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: food } = useGetTypeQuery(id!)

  if (!food) {
    return <h3>Carregand....</h3>
  }

  return (
    <>
      <Header
        alternativeStyle={true}
        alternativeContent={true}
        alternativeSubtitle={true}
      />
      <Banner capa={food.capa} tipo={food.tipo} titulo={food.titulo} />
      <Products />
      <Footer />
    </>
  )
}
export default Product
