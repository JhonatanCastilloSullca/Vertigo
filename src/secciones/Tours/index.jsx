import { DotLoader } from 'react-spinners';
import { useFetch } from '../../Hook/useFetch';
import CardTours from '../../componentes/CardTours'
import './index.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { GiDuration } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
function getRandomTours(tours, count) {
    let shuffled = tours.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}
function Tours() {
    const { t } = useTranslation();
    const languageId = localStorage.lng === 'es' ? 1 : localStorage.lng === 'en' ? 2 : 1;
    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
        body: {
            language_id: languageId
        }
    };
    const { data, loading, error } = useFetch("https://api.vertigotravelperu.com/api/tours", requestOptions);
    const categoria = data ? data.filter((item) => item.destacado == 1) : [];
    const ToursData = categoria;
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
    if (!ToursData) return <div>{t("buttons.no-se-encontraron")}</div>;
    return (
        <>
            <div className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">{t("tours.destinos")}</span>
                            {/* <h2 className="mb-4">{t("tours.nuestros-tours")}</h2> */}
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
                                        delay: 1800,
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
                                    className=""
                                >

                                    {
                                        ToursData.map((tour) => (
                                            <SwiperSlide key={tour.id}>
                                                <div className="project-wrap">
                                                    <NavLink
                                                        to={`/tours/${tour.slug}`}
                                                        className="img"
                                                        style={{
                                                            backgroundImage: `url(${tour.imagenprincipal ? tour.imagenprincipal : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJbnQkQbM5APIunAO_B6Upp9b8zqnscVro8WPe2Ic9Q&s'})`
                                                        }}
                                                    >
                                                        <span className="price">$ {tour.precio || 'Precio no disponible'}</span>
                                                    </NavLink>
                                                    <div className="text p-4">
                                                        <NavLink to={`/tours/${tour.slug}`} className="category-link">{tour.categoria?.nombre || 'Categoría no disponible'}</NavLink>
                                                        <h3><NavLink to={`/tours/${tour.slug}`}>{tour.nombre}</NavLink></h3>
                                                        <p className="location mb-0"><span className="fa fa-map-marker"></span>
                                                            {tour.ubicaciones?.map((ubicacion, index) => (
                                                                <span key={ubicacion.id}>{(index ? ', ' : '') + ubicacion.nombre}</span>
                                                            ))}
                                                        </p>
                                                        <ul>
                                                            <li><span><AiOutlineTeam /></span> {tour.tamaño_grupo || 'Tamaño del grupo no disponible'}</li>
                                                            <li><span><GiDuration /></span> {tour.duracion} {tour.unidad?.toLowerCase() || 'Duración no disponible'}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tours
