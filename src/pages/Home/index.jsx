import { Link } from "react-router-dom"
import './index.css'
import Servicios from "../../secciones/Servicios"
import Destinos from "../../secciones/Destinos"
import Tours from "../../secciones/Tours"
import Parallax from "../../secciones/Parallax"
import About from "../../secciones/About"
import Testimonios from "../../secciones/Testimonios"
import Blog from "../../secciones/Blog"

function Home() {
    const tours = [
        'tour-1',
        'tour-2',
        'tour-3',
        'tour-4',
    ]

    return (
        <>
            <div className="hero-wrap js-fullheight" style={{ backgroundImage: "url('../../../src/assets/images/bg_5.jpg')" }}>
                <div className="container p-3">
                    <div className="row no-gutters slider-text js-fullheight align-items-center">
                        <div className="col-md-7 ">
                            <span className="subheading">Bienvenido a vertigo  Travel</span>
                            <p className="caps">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla, ex nobis culpa iusto rem itaque consequatur illum fugiat dolore consequuntur saepe sapiente provident. Quod accusantium quidem fuga dolores architecto! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatibus alias. Sit nisi, tenetur voluptate recusandae esse numquam unde quo corporis ad laborum? Sed excepturi, tenetur odit fugiat libero molestiae?</p>
                        </div>
                        <div className="col-md-5">
                            <a href="https://vimeo.com/45830194"
                                className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
                                <span className="fa fa-play"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Servicios />
            <Destinos />
            <Tours />
            <Parallax />
            <About />
            <Testimonios />
            <Blog />


        </>
    )
}

export default Home
