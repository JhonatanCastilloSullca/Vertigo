import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useContext, useEffect } from "react";
import { GeneralContext } from "../../context/general";
import CertificadoCarousel from "../../componentes/CertificadoCarousel";
import { useCart } from "../../Hook/useCart";
import { Col, Container, Row } from 'react-bootstrap';
import { FaMedal, FaUserGraduate } from 'react-icons/fa';
import { FaClockRotateLeft } from 'react-icons/fa6';
import About from '../../secciones/About';
import Testimonios from '../../secciones/Testimonios';
import { useTranslation } from 'react-i18next';
import BlogNosotros from '../../componentes/BlogNosotros';
import { useFetch } from '../../Hook/useFetch';



function NosotrosPage() {
    const { t } = useTranslation();



    const { general } = useContext(GeneralContext);
    const GeneralData = general.nosotros;
    const cabeceraTipo = general.certificados;

    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
    };
    const { data: blogData, loading, error } = useFetch(`https://api.vertigotravelperu.com/api/blogs?language_id=1&nosotros=0`, requestOptions);




    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${GeneralData.image_principal}')` }}>
                <div className="overlay-real"></div>
                <Container className="position-relative">
                    <Row className="js-mediumheight d-flex justify-content-center align-items-center">
                        <div className="principal-hero-title d-flex flex-column justify-content-center align-items-center">
                            <h1>{t("nosotros.nosotros")}</h1>
                            <p className="principal-hero-text">{GeneralData.titulo}</p>
                        </div>
                    </Row>
                </Container>
            </div>
            <About />
            <div className="ftco-section services-section descriptio-tour-container pt-0 ">
                <Container>
                    <Row>
                        <Col md={12}>


                            {
                                blogData && blogData.map((item, index) => (
                                    <Row key={item.id} className='align-items-center py-4'>
                                        {index % 2 === 0 ? (
                                            <>
                                                <Col md={6}>
                                                    <div className="d-grid gap-4">
                                                        <div className="w-100 d-flex flex-column gap-4 pt-2 px-4 border border-4 rounded-2">
                                                            <div className="text-nosotros px-2 fw-bold" dangerouslySetInnerHTML={{ __html: item.titulo }}></div>
                                                            <div className="text-nosotros px-2" dangerouslySetInnerHTML={{ __html: item.descripcioncorta }}></div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="w-100">
                                                        <Swiper
                                                            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                                                            spaceBetween={50}
                                                            slidesPerView={1}
                                                            grabCursor={true}
                                                            loop={true}
                                                            navigation={true}
                                                            autoplay={{
                                                                delay: 5000,
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
                                                            {item.images.map((images, index) => (
                                                                <SwiperSlide key={index}>
                                                                    <img src={images.nombre} alt={`Vertigo-travel-nosotros-${item.id}`} className='w-100 h-360 object-fit-cover border rounded' />
                                                                </SwiperSlide>
                                                            ))}
                                                        </Swiper>
                                                    </div>
                                                </Col>
                                            </>
                                        ) : (
                                            <>
                                                <Col md={6}>
                                                    <div className="w-100">
                                                        <Swiper
                                                            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                                                            spaceBetween={50}
                                                            slidesPerView={1}
                                                            grabCursor={true}
                                                            loop={true}
                                                            navigation={true}
                                                            autoplay={{
                                                                delay: 5000,
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
                                                            {item.images.map((images, index) => (
                                                                <SwiperSlide key={index}>
                                                                    <img src={images.nombre} alt={`Vertigo-travel-nosotros-${item.id}`} className='w-100 h-360 object-fit-cover border rounded' />
                                                                </SwiperSlide>
                                                            ))}
                                                        </Swiper>
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="d-grid gap-4">
                                                        <div className="w-100 d-flex flex-column gap-4 pt-2 px-4 border border-4 rounded-2">
                                                            <div className="text-nosotros px-2 fw-bold" dangerouslySetInnerHTML={{ __html: item.titulo }}></div>
                                                            <div className="text-nosotros px-2" dangerouslySetInnerHTML={{ __html: item.descripcioncorta }}></div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </>
                                        )}
                                    </Row>
                                ))
                            }




                        </Col>
                        <Col md={12} className='d-flex align-items-center pt-4'>
                            <div className="w-100 ">
                                <Swiper
                                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    grabCursor={true}
                                    loop={true}
                                    navigation={true}
                                    autoplay={{
                                        delay: 5000,
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
                                    {GeneralData.images.map((images, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={images.nombre} alt="Vertigo-travel-nosotros" className='w-100 h-560 object-fit-cover border rounded' />
                                        </SwiperSlide>
                                    ))}
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
                            <p className="section-description w-100 p-3">
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
