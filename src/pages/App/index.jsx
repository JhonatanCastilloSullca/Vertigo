
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToursPage from '../Tours';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import ToursArchive from '../ToursArchive';
import { CartProvider } from '../../context/cart';
function App() {
  return (
    <CartProvider>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<ToursArchive />} />
        <Route path='/tours/:id' element={<ToursPage />} />
      </Routes>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App
