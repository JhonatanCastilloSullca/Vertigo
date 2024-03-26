
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToursPage from '../Tours';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<ToursPage />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
