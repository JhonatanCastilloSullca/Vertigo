import './index.css'
import ToursData from '../../data/tours.json'
import { GiDuration } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { NavLink } from 'react-router-dom';



function CardTours({ tours }) {
    const hasTours = tours?.length > 0
    return (
        <>
            {hasTours ? (
                tours.map(tour => (
                    <div key={tour.Id} className="col-md-4">
                        <div className="project-wrap">
                            {/* Cambiado a NavLink */}
                            <NavLink to={`/tours/${tour.Id}`} className="img" style={{ backgroundImage: `url(${tour.ImagenPrincipal})` }}>
                                <span className="price">S/. {tour.Precio}</span>
                            </NavLink>
                            <div className="text p-4">
                                {/* Cambiado a NavLink */}
                                <NavLink to={`/tours/${tour.Id}`} className="category-link">{tour.CategoriaTour}</NavLink>
                                <h3><NavLink to={`/tours/${tour.Id}`}>{tour.Titulo}</NavLink></h3>
                                <p className="location mb-0"><span className="fa fa-map-marker"></span>{tour.LugarRecojo}</p>
                                <ul>
                                    <li><span><AiOutlineTeam /></span> 2</li>
                                    <li><span><GiDuration /></span>3 horas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>*No se encontraron resultados</p>
            )}
        </>
    )
}
export default CardTours
