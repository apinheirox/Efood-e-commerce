import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Food, Item } from '../../pages/Home'

import * as S from './styles'
import { BtnProduct, cores } from '../../styles'

import pizza from '../../assets/images/pizzaModal.png'
import close from '../../assets/images/close.png'

const Products = () => {
  const { id } = useParams()

  const [food, setFood] = useState<Food>()
  const [modalAberto, setModalAberto] = useState(false)
  const [produto, setProduto] = useState<Item>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFood(res))
  }, [id])

  if (!food?.cardapio) {
    return <h2>carregando</h2>
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 117) + '...'
    }
  }

  const openModal = (item: Item) => {
    setProduto(item)
    setModalAberto(true)
  }

  return (
    <>
      <div className="container">
        <S.ContainerSection>
          {food?.cardapio && food.cardapio.length > 0 ? (
            food.cardapio.map((item) => (
              <div key={item.id}>
                <div>
                  <S.ContainerProduct>
                    <div>
                      <S.ImagemProduto src={item.foto} alt="imagem do prato" />
                      <S.TitleProduct>{item.nome}</S.TitleProduct>
                      <S.DescriptionProduct>
                        {getDescription(item.descricao)}
                      </S.DescriptionProduct>
                      <BtnProduct
                        onClick={() => openModal(item)}
                        style={{ backgroundColor: `${cores.secundaria}` }}
                      >
                        Adicionar ao carrinho
                      </BtnProduct>
                    </div>
                  </S.ContainerProduct>
                </div>
              </div>
            ))
          ) : (
            <h2>Nenhum item encontrado</h2>
          )}
        </S.ContainerSection>
      </div>

      <S.Modal className={modalAberto ? 'isVisible' : ''}>
        <S.ModalContent className="container">
          <div>
            <S.ImagemPrato src={produto?.foto} alt="imagem do prato" />
          </div>

          <img src={close} alt="fechar" onClick={() => setModalAberto(false)} />

          <div>
            <h4>{produto?.nome}</h4>
            <p>{produto?.descricao}</p>
            <p>{produto?.porcao}</p>
            <BtnProduct>Adicionar ao carrinho - {produto?.preco}</BtnProduct>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </S.Modal>
    </>
  )
}

export default Products
