import './index.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Destinos() {
    return (
        <>
            <div className="ftco-section img ftco-select-destination" style={{ backgroundImage: "url('../../../src/assets/images/bg_3.jpg')" }}>
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center">
                            <span className="subheading">Nuestros paquetes a nivel nacional</span>
                            <h2 className="mb-4">Selecciona tu destino favorito</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="row">
                            <Swiper
                                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                centeredSlides={true}
                                grabCursor={true}
                                autoplay={{
                                    delay: 800,
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
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="project-destination">
                                            <a href="#" className="img" style={{ backgroundImage: "url('../../../src/assets/images/place-1.jpg')" }}>
                                                <div className="text">
                                                    <h3>Philippines</h3>
                                                    <span>8 Tours</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="project-destination">
                                            <a href="#" className="img" style={{ backgroundImage: "url('../../../src/assets/images/place-1.jpg')" }}>
                                                <div className="text">
                                                    <h3>Philippines</h3>
                                                    <span>8 Tours</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="project-destination">
                                            <a href="#" className="img" style={{ backgroundImage: "url('../../../src/assets/images/place-1.jpg')" }}>
                                                <div className="text">
                                                    <h3>Philippines</h3>
                                                    <span>8 Tours</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="project-destination">
                                            <a href="#" className="img" style={{ backgroundImage: "url('../../../src/assets/images/place-1.jpg')" }}>
                                                <div className="text">
                                                    <h3>Philippines</h3>
                                                    <span>8 Tours</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinos
