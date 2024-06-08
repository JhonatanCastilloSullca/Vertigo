
import './index.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { useFetch } from '../../Hook/useFetch';
import { GeneralContext } from '../../context/general';
import { useContext } from 'react';
function HeroSection() {


    const { general: GeneralData } = useContext(GeneralContext);
    const cabeceraTipo = GeneralData.cabecera.tipo;
    console.log("🚀 ~ HeroSection ~ GeneralData:", GeneralData)
    return (
        <>
            <div className='w-100 relative'>
                {cabeceraTipo == 0 ? (
                    <video src={GeneralData.cabecera.video} autoPlay loop muted className='video-home home-size'></video>
                ) : (
                    <Swiper
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper home-size"
                    >
                        {GeneralData.cabecera.images.map((images, index) => (
                            <SwiperSlide key={index}>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='slider-image-home' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </>
    )
}
export default HeroSection

