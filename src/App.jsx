import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Empresas from './pages/Empresas'
import BuscoTrabajo from './pages/BuscoTrabajo'
import Nosotros from './pages/Nosotros'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/busco-trabajo" element={<BuscoTrabajo />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
