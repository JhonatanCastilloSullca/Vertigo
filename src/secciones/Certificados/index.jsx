
import './index.css'
import { GeneralContext } from '../../context/general';
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
function Certificados() {


    const { general: GeneralData } = useContext(GeneralContext);
    const cabeceraTipo = GeneralData.certificados[0];
    console.log(cabeceraTipo);
    return (
        <>
            <div className="ftco-section pt-0 pb-0">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">{cabeceraTipo.titulo}</span>
                            <h2 className="mb-4">{cabeceraTipo.subtitulo}</h2>
                        </div>
                    </div>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        centeredSlides={true}
                        grabCursor={true}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiperDestiny">

                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default Certificados

