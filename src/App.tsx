import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal from './styles'
import Home from './pages/Home'
import Categories from './pages/Categories'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/categories',
    element: <Categories />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
