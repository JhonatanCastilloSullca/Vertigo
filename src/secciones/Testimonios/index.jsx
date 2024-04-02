import './index.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Testimonios() {
    return (
        <>

            <div className="ftco-section testimony-section bg-bottom" style={{ backgroundImage: "url('../../../src/assets/images/bg_1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-7 text-center heading-section heading-section-white ">
                            <span className="subheading">Testimonial</span>
                            <h2 className="mb-4">Tourist Feedback</h2>
                        </div>
                    </div>
                    <div className="row ">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            centeredSlides={true}
                            grabCursor={true}
                            autoplay={{
                                delay: 1000,
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
                            <SwiperSlide>
                                <div className="col-md-12">
                                    <div className="item">
                                        <div className="testimony-wrap py-4">
                                            <div className="text">
                                                <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                                    Vokalia and Consonantia, there live the blind texts.</p>
                                                <div className="d-flex align-items-center">
                                                    <div className="user-img" style={{ backgroundImage: "url('../../../src/assets/images/person_1.jpg')" }}></div>
                                                    <div className="pl-3">
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Marketing Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-md-12">
                                    <div className="item">
                                        <div className="testimony-wrap py-4">
                                            <div className="text">
                                                <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                                    Vokalia and Consonantia, there live the blind texts.</p>
                                                <div className="d-flex align-items-center">
                                                    <div className="user-img" style={{ backgroundImage: "url('../../../src/assets/images/person_1.jpg')" }}></div>
                                                    <div className="pl-3">
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Marketing Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-md-12">
                                    <div className="item">
                                        <div className="testimony-wrap py-4">
                                            <div className="text">
                                                <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                                    Vokalia and Consonantia, there live the blind texts.</p>
                                                <div className="d-flex align-items-center">
                                                    <div className="user-img" style={{ backgroundImage: "url('../../../src/assets/images/person_1.jpg')" }}></div>
                                                    <div className="pl-3">
                                                        <p className="name">Roger Scott</p>
                                                        <span className="position">Marketing Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonios
