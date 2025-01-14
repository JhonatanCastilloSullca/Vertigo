
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToursPage from '../Tours';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import ToursArchive from '../ToursArchive';
import { CartProvider } from '../../context/cart';
import PaquetePage from '../Paquete';
import CheckOutPage from '../CheckOut';
import CheckOutValid from '../CheckOutValid';
import CheckOutInvalid from '../CheckOutInvalid';
import LibroReclamaciones from '../libro-reclamaciones';
import ContactPage from '../Contacto';
import NosotrosPage from '../Nosotros';
import ScrollToTop from '../../componentes/ScrollToTop';
import DoradoPage from '../Dorado';
import TermsPage from '../Terms';
import NotFoundPage from '../NotFoundPage';
import BlogPage from '../Blog';
import BlogsArchive from '../BlogsArchive';
function App() {
  return (
    <CartProvider>
      <Header></Header>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<ToursArchive />} />
        <Route path='/blogs' element={<BlogsArchive />} />
        <Route path='/tours/:id' element={<ToursPage />} />
        <Route path='/blog/:id' element={<BlogPage />} />
        <Route path='/paquete/:id' element={<PaquetePage />} />
        <Route path='/checkout' element={<CheckOutPage />} />
        <Route path='/contacto' element={<ContactPage />} />
        <Route path='/nosotros' element={<NosotrosPage />} />
        <Route path='/dorado' element={<DoradoPage />} />
        <Route path='/terminos' element={<TermsPage />} />
        <Route path='/valid-checkout' element={<CheckOutValid />} />
        <Route path='/invalid-checkout' element={<CheckOutInvalid />} />
        <Route path='/libro-reclamaciones' element={<LibroReclamaciones />} />
        <Route path='*' element={<NotFoundPage />} /> {/* Ruta 404 */}
      </Routes>
      <Footer />
    </CartProvider>
  )
}

export default App
