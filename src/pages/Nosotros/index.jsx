import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../context/general";
import CertificadoCarousel from "../../componentes/CertificadoCarousel";
import { useCart } from "../../Hook/useCart";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGlobe, FaMapMarker, FaMedal, FaPaperPlane, FaPhone, FaUserGraduate } from 'react-icons/fa';
import { FaClockRotateLeft, FaLocationDot } from 'react-icons/fa6';
import { MdMarkEmailRead } from 'react-icons/md';
import About from '../../secciones/About';
import Testimonios from '../../secciones/Testimonios';



function NosotrosPage() {

    const { clearCart } = useCart();
    useEffect(() => {
        clearCart();
    }, []);
    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    const cabeceraTipo = general.certificados[0];
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
                            <h1>Nosotros</h1>
                            <p className="principal-hero-text">{GeneralData.titulo}</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <About />
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="d-grid gap-4">
                                <div className="w-100 d-flex justify-content-between align-items-center gap-4 pt-2 px-4 border border-4 rounded-2">
                                    <FaMedal className="icono-nosotros text-dark" />
                                    <div className="text-nosotros px-2">
                                        En Vertigo Travel, con orgullo, compartimos que hemos sido galardonados con prestigiosos premios, medallas y certificaciones que respaldan nuestra dedicación a ofrecerte lo mejor en cada viaje
                                    </div>
                                </div>
                                <div className="w-100 d-flex justify-content-between align-items-center gap-4 pt-2 px-4 border border-4 rounded-2">
                                    <div className="text-nosotros px-2">
                                        Con guías profesionales graduados y un equipo completamente capacitado, cada viaje con nosotros es una experiencia única y memorable.
                                    </div>
                                    <FaUserGraduate className="icono-nosotros text-dark" />
                                </div>
                                <div className="w-100 d-flex justify-content-between align-items-center gap-4 pt-2 px-4 border border-4 rounded-2">
                                    <FaClockRotateLeft className="icono-nosotros text-dark" />
                                    <div className="text-nosotros px-2">
                                        Tu comodidad y tranquilidad son nuestra prioridad, y estamos listos para brindarte el apoyo que necesitas en cualquier momento del día o de la noche. ¡Confía en nosotros para hacer de cada momento una experiencia sin preocupaciones!


                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='d-flex align-items-center'>
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
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    className="mySwiperDestiny"
                                >
                                    <SwiperSlide >
                                        <img src="https://media.istockphoto.com/id/903568822/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=wGoPEMHmgnB7zwGl0pUaWP1nl_S3dOhnFxTNkQQhtiI=" alt="Contacto" className='w-100 border rounded' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src="https://media.istockphoto.com/id/903568822/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=wGoPEMHmgnB7zwGl0pUaWP1nl_S3dOhnFxTNkQQhtiI=" alt="Contacto" className='w-100 border rounded' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src="https://media.istockphoto.com/id/903568822/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=wGoPEMHmgnB7zwGl0pUaWP1nl_S3dOhnFxTNkQQhtiI=" alt="Contacto" className='w-100 border rounded' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src="https://media.istockphoto.com/id/903568822/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=wGoPEMHmgnB7zwGl0pUaWP1nl_S3dOhnFxTNkQQhtiI=" alt="Contacto" className='w-100 border rounded' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src="https://media.istockphoto.com/id/903568822/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=wGoPEMHmgnB7zwGl0pUaWP1nl_S3dOhnFxTNkQQhtiI=" alt="Contacto" className='w-100 border rounded' />
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src="https://media.istockphoto.com/id/903568822/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=wGoPEMHmgnB7zwGl0pUaWP1nl_S3dOhnFxTNkQQhtiI=" alt="Contacto" className='w-100 border rounded' />
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

export default NosotrosPage