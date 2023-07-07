import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Food } from '../Home'

import Header from '../../components/Header'
import Banner from '../../components/Banner'

import Footer from '../../components/Footer'
import Products from '../../components/Products'

const Product = () => {
  const { id } = useParams()

  const [food, setFood] = useState<Food>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setFood(resp))
  }, [id])

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
