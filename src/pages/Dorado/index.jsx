import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general";
import CertificadoCarousel from "../../componentes/CertificadoCarousel";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Testimonios from '../../secciones/Testimonios';
import { useTranslation } from 'react-i18next';



function DoradoPage() {
    const { t } = useTranslation();




    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    const cabeceraTipo = general.certificados;

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${GeneralData.image_principal}')` }}>
                <div className="overlay-real"></div>
                <Container className="position-relative">
                    <Row className="js-mediumheight d-flex justify-content-center align-items-center">
                        <div className="principal-hero-title d-flex flex-column justify-content-center align-items-center">
                            <h1>Dorado Lodge</h1>
                            <p className="principal-hero-text">{GeneralData.titulo}</p>
                        </div>
                    </Row>
                </Container>
            </div>

            <div className="ftco-section services-section pt-4 descriptio-tour-container">

                <Container>
                    <h2 className='text-center fw-bold'>
                        Booking
                    </h2>
                    <h4 className='text-center pb-4'>
                        We own the Dorado Lodge locates of the Alto Madre de Dios left hand side with private toilets on each bungalow, dining room kitchen service and a very long trail system.
                    </h4>
                    <Row>
                        <Col md={12}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row>
                                    <Form.Group as={Col} md="6" controlId="formNombre">
                                        <Form.Control type="text" placeholder="Nombre" required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, ingresa tu nombre.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="formEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} md="6" className='pt-4' controlId="formCelular">
                                        <Form.Control type="tel" placeholder="Celular" required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, ingresa tu número de celular.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className='pt-4' controlId="formTipoHabitacion">
                                        <Form.Control as="select" required>
                                            <option value="">Selecciona el tipo de habitación</option>
                                            <option value="simple">Habitación Simple</option>
                                            <option value="doble">Habitación Doble</option>
                                            <option value="suite">Suite</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, selecciona un tipo de habitación.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} md="6" className='pt-4' controlId="formFechaIngreso">
                                        <Form.Label>Fecha de Ingreso</Form.Label>
                                        <Form.Control type="date" required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, ingresa la fecha de ingreso.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className='pt-4' controlId="formFechaSalida">
                                        <Form.Label>Fecha de Salida</Form.Label>
                                        <Form.Control type="date" required />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, ingresa la fecha de salida.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group className='pt-4' controlId="formMensaje">
                                    <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='mt-4'>
                                    {t("formulario.enviar-mensaje")}
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div >




            <div className="ftco-section services-section descriptio-tour-container pt-0">
                <Container>
                    <Row>
                        <Col md={12} className='d-flex align-items-center'>
                            <div className="w-100">
                                <Swiper
                                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    grabCursor={true}
                                    loop={true}
                                    navigation={true}
                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    className="mySwiperDestiny"
                                >

                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-1.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-2.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-3.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-4.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-5.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-6.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-7.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-8.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-9.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-10.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-11.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-12.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-13.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-14.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-15.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-16.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-17.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-18.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-19.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-20.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src='./assets/images/dorado-reservation-21.jpg' alt="Vertigo-travel-nosotros" className='w-100 border rounded img-dorado' />
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Testimonios />
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container className="text-center">
                    <Row className="mb-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="section-description">
                                Somos una empresa cusqueña dinámica que genera experiencias turísticas de calidad en turismo cultural, de naturaleza, de aventura y comunitario. Con más de 10 años diseñando productos turísticos en el sur del Perú, ofrecemos una oferta diversificada y contribuimos a la preservación cultural y natural de nuestro país. Además capacitamos constantemente a nuestro personal y aliados estratégicos en nuestros diferentes destinos, lo que nos permite garantizar altos estándares de calidad.
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <CertificadoCarousel general={cabeceraTipo} />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default DoradoPage
