import './index.css'
import { GiDuration } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function CardTours({ tours }) {
    const hasTours = tours?.length > 0;
    return (
        <>
            {hasTours ? (
                tours.map(tour => (
                    <div key={tour.id} className="col-md-4">
                        <div className="project-wrap">
                            <NavLink
                                to={`/tours/${tour.id}`}
                                className="img"
                                style={{
                                    backgroundImage: `url(${tour.imagenprincipal ? tour.imagenprincipal : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJbnQkQbM5APIunAO_B6Upp9b8zqnscVro8WPe2Ic9Q&s'})`
                                }}
                            >
                                <span className="price">S/. {tour.precio}</span>
                            </NavLink>

                            <div className="text p-4">
                                <NavLink to={`/tours/${tour.id}`} className="category-link">{tour.categoria.nombre}</NavLink>
                                <h3><NavLink to={`/tours/${tour.id}`}>{tour.nombre}</NavLink></h3>
                                <p className="location mb-0"><span className="fa fa-map-marker"></span>
                                    {tour.ubicaciones.map((ubicacion, index) => (
                                        <span key={ubicacion.id}>{(index ? ', ' : '') + ubicacion.nombre}</span>
                                    ))}
                                </p>
                                <ul>
                                    <li><span><AiOutlineTeam /></span> {tour.tamaño_grupo}</li>
                                    <li><span><GiDuration /></span> {tour.duracion} {tour.unidad.toLowerCase()}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>*No se encontraron resultados</p>
            )}
        </>
    );
}

export default CardTours;
