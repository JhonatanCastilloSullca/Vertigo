import CardTours from '../../componentes/CardTours'
import './index.css'
import ToursData from '../../data/tours.json'
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function getRandomTours(tours, count) {
    // Crea una copia del array para evitar mutaciones
    let shuffled = tours.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // intercambia elementos
    }
    return shuffled.slice(0, count); // devuelve los primeros `count` elementos
}
function Tours() {
    return (
        <>
            <div className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">Destinos</span>
                            <h2 className="mb-4">Nuestros Tours</h2>
                        </div>
                    </div>
                    <div className="row">
                        <CardTours tours={getRandomTours(ToursData.Search, 3)} />
                        <Col >
                            <p className='align-items-center justify-content-center d-flex'>
                                <NavLink to={`/tours`} className='btn btn-primary py-3 px-4'>
                                    Revisa nuestros tours
                                </NavLink>
                            </p>

                        </Col>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tours
