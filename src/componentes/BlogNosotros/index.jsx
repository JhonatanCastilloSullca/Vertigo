import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const BlogNosotros = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <Row key={index} className='align-items-center'>
                    <Col md={6}>
                        {index % 2 === 0 ? (
                            <div className="d-grid gap-4">
                                <div className="w-100 d-flex justify-content-between align-items-center gap-4 pt-2 px-4 border border-4 rounded-2">
                                    <div className="text-nosotros px-2" dangerouslySetInnerHTML={{ __html: item.descripcioncorta }}></div>
                                </div>
                            </div>
                        ) : (
                            <div className="d-grid gap-4">
                                <Swiper spaceBetween={50} slidesPerView={1}>
                                    {item.images.map((image, imgIndex) => (
                                        <SwiperSlide key={imgIndex}>
                                            <img src={image.nombre} alt={`Vertigo-travel-nosotros-${imgIndex}`} className='w-100 h-560 object-fit-cover border rounded' />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                    </Col>
                    <Col md={6}>
                        {index % 2 === 0 ? (
                            <div className="d-grid gap-4">
                                <Swiper spaceBetween={50} slidesPerView={1}>
                                    {item.images.map((image, imgIndex) => (
                                        <SwiperSlide key={imgIndex}>
                                            <img src={image.nombre} alt={`Vertigo-travel-nosotros-${imgIndex}`} className='w-100 h-560 object-fit-cover border rounded' />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ) : (
                            <div className="d-grid gap-4">
                                <div className="w-100 d-flex justify-content-between align-items-center gap-4 pt-2 px-4 border border-4 rounded-2">
                                    <div className="text-nosotros px-2" dangerouslySetInnerHTML={{ __html: item.descripcioncorta }}></div>
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            ))}
        </>
    );
};

export default BlogNosotros;
