import { Accordion, Card, Col, Container, Row } from "react-bootstrap"
import './index.css'
import CardTours from "../../componentes/CardTours"
import { FaCheck, FaTimes } from "react-icons/fa";
import { BsBackpack } from "react-icons/bs";
import ToursData from '../../data/tours.json';
import { useParams } from "react-router-dom"
import ToursInfoSection from "../../componentes/ToursInfoSection";
import CardFormulario from "../../componentes/CardFormulario";
import TourInformation from "../../componentes/ToursInfoItems";


function ToursPage() {

    const params = useParams();
    const tourId = parseInt(params.id);
    const tourData = ToursData.Search.find(tour => tour.id === tourId);
    const detallesTourDias = tourData.DetallesTourDias;


    if (!tourData) {
        return <div>El tour no existe.</div>;
    }

    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${tourData.ImagenPrincipal}')` }}>
                <div className="overlay-real"></div>
                <div className="container p-3">
                    <div className="row no-gutters slider-text js-mediumheight align-items-center">
                        <div className="col-md-7 ">
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <ToursInfoSection
                    titulo={tourData.Titulo}
                    duracion={tourData.Duracion_del_Tour}
                    precio={tourData.Precio}
                    categoria={tourData.CategoriaTour}
                />
            </Container>
            <div className="ftco-section services-section pt-4">
                <div className="container p-4">
                    <div className="row d-flex">
                        <div className="col-md-4">
                            <div className="row gap-4">
                                <CardFormulario tour={tourData} />
                                {tourData.Max_group || tourData.EdadMinima || tourData.Lugar_de_Recojo || tourData.UbicacionTour || (tourData.Idiomas_Disponibles && tourData.Idiomas_Disponibles.length > 0) ? (
                                    <Card>
                                        <Card.Body>
                                            <h3 className="box-title">Información del Tour</h3>
                                            <TourInformation tourData={tourData} />
                                        </Card.Body>
                                    </Card>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-md-8 heading-section">
                            <div className="w-100">
                                {tourData.Titulo && tourData.Descripcion && (
                                    <Container className="mt-4">
                                        <h3 className="box-title m-0">{tourData.Titulo}</h3>
                                        <p className="box-description">{tourData.Descripcion}</p>
                                    </Container>
                                )}
                                {detallesTourDias && detallesTourDias.length > 0 && (
                                    <Container className="mt-4 ">
                                        <h3 className="box-title m-0">Itinerario</h3>
                                        <Accordion defaultActiveKey={['0']} alwaysOpen className="pt-4">
                                            {detallesTourDias && detallesTourDias.map((detalle, index) => (
                                                <Accordion.Item key={index} eventKey={String(index)}>
                                                    <Accordion.Header><h6 className="fw-bold text-primary">Día {index + 1}: {detalle.titulo}</h6></Accordion.Header>
                                                    <Accordion.Body>
                                                        {detalle.descripcion}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
                                    </Container>
                                )}
                                {tourData.Incluye && tourData.Incluye.length > 0 && (
                                    <Container className="mt-4">
                                        <Card>
                                            <Card.Body className="">
                                                <h3 className="box-title m-0">Incluye / No Incluye</h3>
                                                <Row>
                                                    <Col>
                                                        <Row className="pt-4">
                                                            {tourData.Incluye.map((item, index) => (
                                                                <Col key={index} md={12} className="d-flex justify-content-left">
                                                                    <span className="icono-check"><FaCheck /></span>
                                                                    <h5 className="item-tittle-information text-check">{item}</h5>
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    </Col>
                                                    {tourData.NoIncluye && tourData.NoIncluye.length > 0 && (
                                                        <Col>
                                                            <Row className="pt-4">
                                                                {tourData.NoIncluye.map((item, index) => (
                                                                    <Col key={index} md={12} className="d-flex justify-content-left">
                                                                        <span className="icono-times"><FaTimes /></span>
                                                                        <h5 className="item-tittle-information text-check">{item}</h5>
                                                                    </Col>
                                                                ))}
                                                            </Row>
                                                        </Col>
                                                    )}
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Container>
                                )}
                                {tourData.QueLlevar && tourData.QueLlevar.length > 0 && (
                                    <Container className="mt-4 ">
                                        <Card>
                                            <Card.Body className="">
                                                <h3 className="box-title m-0">Qué Llevar</h3>
                                                <Row className="pt-4">
                                                    {tourData.QueLlevar.map((item, index) => (
                                                        <Col key={index} md={4} className="d-flex justify-content-center">
                                                            <span className="icono-backpack"><BsBackpack /></span>
                                                            <h5 className="item-tittle-information text-check">{item}</h5>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Container>
                                )}
                                {tourData.galeria && tourData.galeria.length > 0 && (
                                    <Container className="mt-4">
                                        <h3 className="box-title m-0">Galería</h3>
                                        <Row>
                                            {tourData.galeria.map((imagenUrl, index) => (
                                                <Col key={index} md={4} className="d-flex justify-content-center mb-4">
                                                    <Card className="border-0">
                                                        <Card.Img variant="top" src={imagenUrl} className="galeria-imagen" />
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Container>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Container>
                    <h3 className="box-title m-0">Tours Relacionados</h3>
                    <Row className="pt-4">
                        <CardTours />
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default ToursPage
