import { Accordion, Button, Card, Col, Container, Image, ProgressBar, Row } from "react-bootstrap"
import './index.css'
import CardTours from "../../componentes/CardTours"
import { FaCheck, FaTimes, FaUserCircle } from "react-icons/fa";
import { BsBackpack, BsCardChecklist } from "react-icons/bs";
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
import Certificados from "../../secciones/Certificados";
import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general";
import CertificadoCarousel from "../../componentes/CertificadoCarousel";
import { useCart } from "../../Hook/useCart";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


function CheckOutPage() {
    const { cart, clearCart, removeFromeCart } = useCart();
    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    const cabeceraTipo = general.certificados[0];





    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${GeneralData.image_principal}')` }}>
                <div className="overlay-real"></div>
                <Container className="position-relative">
                    <Row className="js-mediumheight d-flex justify-content-center align-items-center">
                        <div className="principal-hero-title d-flex flex-column justify-content-center align-items-center">
                            <h1>Realiza tu reserva</h1>
                            <p className="principal-hero-text">{GeneralData.titulo}</p>
                        </div>
                    </Row>
                </Container>
            </div>

            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container className="text-center">
                    <div className="login-box Booking-box">
                        <Card className="m-2">
                        </Card>
                    </div>

                </Container>
            </div >
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
            </div >
        </>
    )
}

export default CheckOutPage
