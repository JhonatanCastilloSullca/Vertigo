import { Accordion, Card, Col, Container, Row } from "react-bootstrap"
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


function BlogPage() {

    const params = useParams();
    const blogId = params.id;

    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
    };


    const { data: blogData, loading, error } = useFetch(`https://api.vertigotravelperu.com/api/blog-slug?slug=${blogId}`, requestOptions);
    console.log(blogData);

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
    if (!blogData) return <div>No se encontró el blog</div>;

    if (!blogData) {
        return <div>El blog no existe.</div>;
    }

    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: `url('${blogData.imagenprincipal}')` }}>
                <div className="overlay-real"></div>
                <div className="container p-3">
                    <div className="row no-gutters slider-text js-mediumheight align-items-center">
                        <div className="col-md-7 ">
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <Row className="info-row">
                    <Col md={12} className=" d-flex align-items-center justify-content-center">
                        <h2 className="subheading-tours font-weight-bold text-light">{blogData.titulo}</h2>
                    </Col>

                </Row>
            </Container>
            {/* <Container>
                <Row className="mt-4 pt-4">
                    <Col md={12} className=" d-flex align-items-center justify-content-center gap-4">
                        <h2 className="fw-bolder fs-6 text-gray">{blogData.user.apellido} {blogData.user.nombre}</h2>
                        <h2 className="font-weight-semibold fs-6 text-gray">{blogData.fecha}</h2>
                    </Col>
                </Row>
            </Container> */}
            <Container>
                <Row>
                    <Col>
                        <Row className="pt-4 mt-4">
                            <div className="incluye-tours text-center" dangerouslySetInnerHTML={{ __html: blogData.descripcioncorta }}></div>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="ftco-section services-section pt-4 descriptio-blog-container">
                <div className="container p-4">
                    <div className="row d-flex">
                        <div className="col-md-12 heading-section">
                            <div className="w-100">
                                <Swiper
                                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={3}
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
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    className="mySwiperDestiny"
                                >
                                    {blogData.images.map(blog => (
                                        <SwiperSlide key={blog.id}>
                                            <img data-lazyloaded="1" src={blog.nombre} width="320" height="280" className="img-galery-blog"></img>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {blogData.nombre && blogData.descripcion && (
                                    <Container className="mt-4">
                                        <h3 className="box-title m-0">{blogData.nombre}</h3>
                                        <div className="incluye-tours" dangerouslySetInnerHTML={{ __html: blogData.descripcion }}></div>
                                    </Container>
                                )}


                                {blogData.galeria && blogData.galeria.length > 0 && (
                                    <Container className="mt-4">
                                        <h3 className="box-title m-0">Galería</h3>
                                        <Row>
                                            {blogData.galeria.map((imagenUrl, index) => (
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
                    <Row>
                        <Col>
                            <Row className="pt-4 mt-4">
                                <div className="incluye-tours text-center" dangerouslySetInnerHTML={{ __html: blogData.descripcionlarga }}></div>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <h3 className="box-title m-0">Tours Relacionados</h3>
                    <Row className="pt-4">
                        <CardTours tours={blogData.relacionados} />
                    </Row>
                </Container>
            </div >
        </>
    )
}

export default BlogPage
