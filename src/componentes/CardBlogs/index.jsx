import './index.css';
import BlogCard from '../BlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useFetch } from '../../Hook/useFetch';

function CardBlogs() {
    const { data, loading, error } = useFetch("https://mocki.io/v1/857c2ea2-9c06-4b08-8bfb-203f332482d5");
    const blogs = data;
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!blogs) return <div>No se encontraron Blogs</div>;

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
