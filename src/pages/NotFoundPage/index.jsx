import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useContext } from "react";
import { GeneralContext } from "../../context/general";
import CertificadoCarousel from "../../componentes/CertificadoCarousel";
import { useTranslation } from 'react-i18next';
import { Container, Row } from 'react-bootstrap';



function NotFoundPage() {
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
                            <h1>404</h1>
                            <p className="principal-hero-text">No encontramos lo que buscabas</p>
                        </div>
                    </Row>
                </Container>
            </div>

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

export default NotFoundPage
