import Header from '../../components/Header'
import CategoryList from '../../containers/CategoryList'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

export interface Item {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Food = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: Item[]
}

const Home = () => {
  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFoods(res))
  }, [])

  if (!foods) {
    return <h3>Carregando</h3>
  }

  return (
    <>
      <Header />
      <CategoryList categorys={foods} />
      <Footer />
    </>
  )
}

export default Home
