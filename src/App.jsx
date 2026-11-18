import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import OilsPage from './pages/OilsPage'
import WorkshopPage from './pages/WorkshopPage'
import LocationPage from './pages/LocationPage'
import { QuoteProvider } from './context/QuoteContext'

function App() {
  return (
    <BrowserRouter>
      <QuoteProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="servicios" element={<ServicesPage />} />
            <Route path="servicios/:id" element={<ServiceDetailPage />} />
            <Route path="aceites" element={<OilsPage />} />
            <Route path="taller" element={<WorkshopPage />} />
            <Route path="ubicacion" element={<LocationPage />} />
          </Route>
        </Routes>
      </QuoteProvider>
    </BrowserRouter>
  )
}

export default App
