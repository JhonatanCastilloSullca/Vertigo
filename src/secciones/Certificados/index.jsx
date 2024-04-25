
import './index.css'
import { GeneralContext } from '../../context/general';
import { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ImageModal from '../../componentes/ImageModal';

function Certificados() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };


    const { general: GeneralData } = useContext(GeneralContext);
    const cabeceraTipo = GeneralData.certificados[0];
    return (
        <>
            <div className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center">
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
                        loop={true}
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
                        className="mySwiperDestiny"
                    >
                        {
                            cabeceraTipo.images.map((certificados) => (
                                <SwiperSlide key={certificados.id}>
                                    <img
                                        src={certificados.nombre}
                                        className='slider-image-home'
                                        onClick={() => handleImageClick(certificados.nombre)}
                                        alt="Nature"
                                    />
                                </SwiperSlide>
                            )
                            )
                        }




                    </Swiper>
                </div>
                <ImageModal isOpen={modalOpen} imageUrl={selectedImage} onClose={() => setModalOpen(false)} />
            </div>
        </>
    )
}
export default Certificados

