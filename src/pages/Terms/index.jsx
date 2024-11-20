import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../context/general";
import CertificadoCarousel from "../../componentes/CertificadoCarousel";
import { useCart } from "../../Hook/useCart";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdMarkEmailRead } from 'react-icons/md';
import { useTranslation } from 'react-i18next';



function TermsPage() {
    const { t } = useTranslation();



    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    const cabeceraTipo = general.certificados;

    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${GeneralData.image_principal}')` }}>
                <div className="overlay-real"></div>
                <Container className="position-relative">
                    <Row className="js-mediumheight d-flex justify-content-center align-items-center">
                        <div className="principal-hero-title d-flex flex-column justify-content-center align-items-center">
                            <h1>{t("terminos.terminos-condiciones")}</h1>
                            <p className="principal-hero-text">{GeneralData.titulo}</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className="ftco-section services-section descriptio-tour-container py-6">
                <Container>
                    <div className="col-md-12 heading-section text-center">
                        <span className="subheading py-4">{t("terminos.terminos-condiciones")}</span>
                        <div className="incluye-tours text-left">
                            <p dangerouslySetInnerHTML={{ __html: t('terminos.ley') }}></p>
                            <p dangerouslySetInnerHTML={{ __html: t('terminos.recopile') }}></p>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: t('terminos.otorgarme') }}></li>
                                <li dangerouslySetInnerHTML={{ __html: t('terminos.informarme') }}></li>
                                <li dangerouslySetInnerHTML={{ __html: t('terminos.establecer') }}></li>
                                <li dangerouslySetInnerHTML={{ __html: t('terminos.evaluar') }}></li>
                                <li dangerouslySetInnerHTML={{ __html: t('terminos.realizar') }}></li>
                            </ul>
                            <p dangerouslySetInnerHTML={{ __html: t('terminos.informado') }}></p>
                            <ul>
                                <li dangerouslySetInnerHTML={{ __html: t('terminos.no-consentimiento') }}></li>
                                <li dangerouslySetInnerHTML={{ __html: t('terminos.revocar') }}></li>
                                <li dangerouslySetInnerHTML={{ __html: t('terminos.derechos') }}></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div >
            <div className="ftco-section services-section pt-4 descriptio-tour-container">
                <Container className="text-center">
                    <Row className="mb-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="section-description w-100 p-3">
                                {t("testimonios.mensaje-testimonio")}
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

export default TermsPage
