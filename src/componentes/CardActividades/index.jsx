import './index.css'
import serviciosData from '../../data/servicios.json'

function CardActividades() {
    const servicios = serviciosData.Search
    const hasServicios = servicios?.length > 0


    return (
        <>
            {hasServicios ? (
                servicios.map(servicio => (
                    <div key={servicio.Id} className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                        <div className={`services color-${servicio.Id} services-1 d-block img`} style={{ backgroundImage: `url(${servicio.Poster})` }}>
                            <div className="icon d-flex align-items-center justify-content-center">
                                <img src={servicio.Icono} className='img-icono' alt="" />

                            </div>
                            <div className="media-body">
                                <h3 className="heading mb-3">{servicio.Title}</h3>
                                <p>{servicio.Content}</p>
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
export default CardActividades
