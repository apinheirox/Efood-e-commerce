import Header from '../../components/Header'
import CategoryList from '../../containers/CategoryList'
import Footer from '../../components/Footer'

import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: foods } = useGetRestaurantsQuery()

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
