
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToursPage from '../Tours';
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import ToursArchive from '../ToursArchive';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<ToursArchive />} />
        <Route path='/tours/:Id' element={<ToursPage />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
