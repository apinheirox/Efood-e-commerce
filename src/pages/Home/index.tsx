import Header from '../../components/Header'
import CategoryList from '../../containers/CategoryList'
import Food from '../../models/Food'
import macarrao from '../../assets/images/macarrao.png'
import Footer from '../../components/Footer'

const foods: Food[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    note: '4.7',
    emphasis: 'mais pedido'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    note: '4.7'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    note: '4.7'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    note: '4.7'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    note: '4.7'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    category: 'italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    note: '4.7'
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <CategoryList categorys={foods} />
      <Footer />
    </>
  )
}

export default Home
