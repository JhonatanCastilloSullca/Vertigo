import React from 'react';
import './index.css';
import blogData from '../../data/blog.json';
import BlogCard from '../BlogCard'; // Asegúrate de que la ruta de importación es correcta
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // importa los estilos de Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function CardBlogs() {
    const blogs = blogData.Search;
    const hasBlogs = blogs && blogs.length > 0;

    return (
        <>
            {hasBlogs ? (
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
                    {blogs.map(blog => (
                        <SwiperSlide key={blog.id}>
                            <BlogCard blog={blog} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>No se encontraron resultados</p>
            )}
        </>
    );
}

export default CardBlogs;
