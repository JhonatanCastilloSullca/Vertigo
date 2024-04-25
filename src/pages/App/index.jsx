
import { Link, Route, Routes } from 'react-router-dom';
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
function App() {
  return (
    <CartProvider>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<ToursArchive />} />
        <Route path='/tours/:id' element={<ToursPage />} />
        <Route path='/paquete/:id' element={<PaquetePage />} />
        <Route path='/checkout' element={<CheckOutPage />} />
      </Routes>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App
