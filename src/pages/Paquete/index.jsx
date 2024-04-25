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
import { useFetch } from "../../Hook/useFetch";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


function PaquetePage() {


    const params = useParams();
    const paqueteSlug = params.id;


    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
    };


    const { data: paqueteData, loading, error } = useFetch(`http://192.168.1.32/api/ubicacion-slug?language_id=1&slug=${paqueteSlug}`, requestOptions);
    if (paqueteData && paqueteData.image) {
        console.log(paqueteData.image.nombre);
    }


    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!paqueteData) return <div>No se encontró el tour</div>;


    if (!paqueteData) {
        return <div>El tour no existe.</div>;
    }

    return (
        <>
            <div className="hero-wrap js-altoheight" style={{ backgroundImage: `url('${paqueteData.image.nombre}')` }}>
                <div className="overlay-real-paquete"></div>
                <div className="container p-3">
                    <div className="row no-gutters slider-text js-altoheight align-items-center">
                        <div className="col-md-7 ">
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <ToursInfoSection
                    titulo={paqueteData.nombre}
                    duracion={paqueteData.duracion}
                    precio={paqueteData.precio}
                />
            </Container>
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <div className="container p-4">
                    <div className="row d-flex">
                        <div className="col-md-4">
                            <div className="row gap-4">
                                <CardFormulario tour={paqueteData} />
                                {paqueteData.tamaño_grupo || paqueteData.Lugar_de_Recojo || paqueteData.ubicaciones || (paqueteData.Idiomas_Disponibles && paqueteData.Idiomas_Disponibles.length > 0) ? (
                                    <Card>
                                        <Card.Body>
                                            <h3 className="box-title">Información del Tour</h3>
                                            <TourInformation paqueteData={paqueteData} />
                                        </Card.Body>
                                    </Card>
                                ) : null}
                            </div>
                            <div className="row gap-4 mt-4">
                                <Accordion defaultActiveKey="0" className="p-0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="incluye-accordion "><h3 className="box-title border-0 mb-0">Incluye</h3></Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col>
                                                    <Row className="pt-4">
                                                        <div className="incluye-tours" dangerouslySetInnerHTML={{ __html: paqueteData.incluye }}></div>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="row gap-4 mt-4">
                                <Accordion defaultActiveKey="0" className="p-0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="incluye-accordion "><h3 className="box-title border-0 mb-0">No Incluye</h3></Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                {paqueteData.noincluye && (
                                                    <Col>
                                                        <Row className="pt-4">
                                                            <div className="noincluye-tours" dangerouslySetInnerHTML={{ __html: paqueteData.noincluye }}></div>
                                                        </Row>
                                                    </Col>
                                                )}
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="row gap-4 mt-4">
                                <Accordion defaultActiveKey="0" className="p-0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="incluye-accordion "><h3 className="box-title border-0 mb-0">Qué Llevar</h3></Accordion.Header>
                                        <Accordion.Body>
                                            <Row className="pt-4">
                                                <div className="description-tours recomendation-tours" dangerouslySetInnerHTML={{ __html: paqueteData.recomendaciones }}>
                                                </div>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-md-8 heading-section">
                            <div className="w-100">
                                {paqueteData.nombre && paqueteData.descripcion && (
                                    <Container className="mt-4">
                                        <h3 className="box-title m-0">{paqueteData.nombre}</h3>
                                        <div className="incluye-tours" dangerouslySetInnerHTML={{ __html: paqueteData.descripcion }}></div>
                                    </Container>
                                )}
                                {paqueteData.galeria && paqueteData.galeria.length > 0 && (
                                    <Container className="mt-4">
                                        <h3 className="box-title m-0">Galería</h3>
                                        <Row>
                                            {paqueteData.galeria.map((imagenUrl, index) => (
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

export default PaquetePage
