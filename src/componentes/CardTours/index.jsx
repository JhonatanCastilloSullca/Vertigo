import './index.css'
import ToursData from '../../data/tours.json'
import { GiDuration } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";



function CardTours() {
    const tours = ToursData.Search
    const hasTours = tours?.length > 0
    return (
        <>
            {hasTours ? (
                tours.map(tour => (
                    <div key={tour.Id} className="col-md-4 ">
                        <div className="project-wrap">
                            <a href="#" className="img" style={{ backgroundImage: `url(${tour.ImagenPrincipal})` }}>
                                <span className="price">S/. {tour.Precio}</span>
                            </a>
                            <div className="text p-4">
                                <a href="#" target="_blank" rel="noopener noreferrer"> {tour.CategoriaTour}</a>
                                <h3><a href="#">{tour.Titulo}</a></h3>
                                <p className="location mb-0"><span className="fa fa-map-marker"></span>{tour.LugarRecojo}</p>
                                <ul>
                                    <li><span className=""><AiOutlineTeam /></span> 2</li>
                                    <li><span className=""><GiDuration /></span>3</li>
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
