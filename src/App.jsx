import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/common/ScrollToTop'
import Home from './pages/Home'
import Empresas from './pages/Empresas'
import BuscoTrabajo from './pages/BuscoTrabajo'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/candidatos" element={<BuscoTrabajo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
