import { Accordion, Card, Col, Container, Row } from "react-bootstrap"
import './index.css'
import CardTours from "../../componentes/CardTours"
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
import { DotLoader } from "react-spinners";


function ToursPage() {

    const params = useParams();
    const tourId = params.id;

    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
    };


    const { data: tourData, loading, error } = useFetch(`https://api.vertigotravelperu.com/api/tour-slug?slug=${tourId}`, requestOptions);

    if (loading) return <div className="mainloader">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <DotLoader color="#28a745" loading={true} size={100} />
        </div>
    </div>;
    if (error) return <div className="mainloader">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <DotLoader color="#ff0011" loading={true} size={100} />
        </div>
    </div>;
    if (!tourData) return <div>No se encontró el tour</div>;
    const detallesTourDias = tourData.itinerarios;


    if (!tourData) {
        return <div>El tour no existe.</div>;
    }

    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${tourData.imagenprincipal}')` }}>
                <div className="overlay-real"></div>
                <div className="container p-3">
                    <div className="row no-gutters slider-text js-mediumheight align-items-center justify-content-center">
                        <div className="col-md-7 ">
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <ToursInfoSection
                    titulo={tourData.nombre}
                    duracion={tourData.duracion}
                    precio={tourData.precio}
                    categoria={tourData.categoria.nombre}
                />
            </Container>
            <div className="ftco-section services-section pt-4 descriptio-tour-container pb-0 -mb-4">
                <div className="container p-4">
                    <div className="row d-flex">
                        <div className="col-md-4">
                            <div className="row gap-4">
                                <CardFormulario tour={tourData} />
                                {tourData.tamaño_grupo || tourData.Lugar_de_Recojo || tourData.ubicaciones || (tourData.Idiomas_Disponibles && tourData.Idiomas_Disponibles.length > 0) ? (
                                    <Card>
                                        <Card.Body>
                                            <h3 className="box-title">Información del Tour</h3>
                                            <TourInformation tourData={tourData} />
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
                                                        <div className="incluye-tours" dangerouslySetInnerHTML={{ __html: tourData.incluye }}></div>
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
                                                {tourData.noincluye && (
                                                    <Col>
                                                        <Row className="pt-4">
                                                            <div className="noincluye-tours" dangerouslySetInnerHTML={{ __html: tourData.noincluye }}></div>
                                                        </Row>
                                                    </Col>
                                                )}
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                        </div>
                        <div className="col-md-8 heading-section">
                            <div className="w-100">
                                <Swiper
                                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    grabCursor={true}
                                    loop={true}
                                    navigation={true}
                                    autoplay={{
                                        delay: 10000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 2,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    className="mySwiperDestiny"
                                >
                                    {tourData.images.map(tour => (
                                        <SwiperSlide key={tour.id}>
                                            <img data-lazyloaded="1" src={tour.nombre} width="320" height="280" className="img-galery-tour"></img>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {tourData.nombre && tourData.descripcion && (
                                    <Container className="mt-4">
                                        <h3 className="box-title m-0">{tourData.nombre}</h3>
                                        <div className="incluye-tours" dangerouslySetInnerHTML={{ __html: tourData.descripcion }}></div>
                                    </Container>
                                )}
                                {detallesTourDias && detallesTourDias.length > 0 && (
                                    <Container className="mt-4 ">
                                        <h3 className="box-title m-0">Itinerario</h3>
                                        <Accordion defaultActiveKey="0" className="pt-4">
                                            {detallesTourDias && detallesTourDias.map((detalle, index) => (
                                                <Accordion.Item key={index} eventKey={String(index)}>
                                                    <Accordion.Header>
                                                        <h6 className="fw-bold text-primary">{detalle.titulo}</h6>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="incluye-tours" dangerouslySetInnerHTML={{ __html: detalle.descripcion }}></div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ))}
                                        </Accordion>
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
                                <Container className="mt-4 ">

                                    <Accordion defaultActiveKey="0" className="p-0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header className="incluye-accordion "><h3 className="box-title border-0 mb-0">Qué Llevar</h3></Accordion.Header>
                                            <Accordion.Body>
                                                <Row className="pt-4">
                                                    <div className="description-tours recomendation-tours" dangerouslySetInnerHTML={{ __html: tourData.recomendaciones }}>
                                                    </div>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>

                            </div>
                        </div>
                    </div>
                </div>
                <Container>
                    <h3 className="box-title m-0">Tours Relacionados</h3>
                    <Row className="pt-4">
                        <CardTours tours={tourData.relacionados} />
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default ToursPage
