import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import LocationPage from './pages/LocationPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="servicios/:id" element={<ServiceDetailPage />} />
          <Route path="ubicacion" element={<LocationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
