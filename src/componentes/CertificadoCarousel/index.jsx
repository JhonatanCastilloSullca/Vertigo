import { useState } from 'react';
import './index.css';
import ImageModal from '../ImageModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function CertificadoCarousel({ general }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    return (
        <div className="">
            <div className="container">
                <div className="row templaterow py-5">
                    {general.detalles.map((certificados) => (
                        <div className="column columnrow" key={certificados.id}>
                            <div className="icon-container">
                                <img
                                    src={certificados.url}
                                    className="img-fluid icon-image img-size-certi"
                                    onClick={() => handleImageClick(certificados.urlabrir)}
                                    alt="Certificado"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ImageModal isOpen={modalOpen} imageUrl={selectedImage} onClose={() => setModalOpen(false)} />
        </div>
    );
}

export default CertificadoCarousel;
