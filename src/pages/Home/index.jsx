import './index.css'
import Servicios from "../../secciones/Servicios"
import Destinos from "../../secciones/Destinos"
import Tours from "../../secciones/Tours"
import Parallax from "../../secciones/Parallax"
import About from "../../secciones/About"
import Testimonios from "../../secciones/Testimonios"
import Blog from "../../secciones/Blog"
import { useTranslation } from "react-i18next"
import Search from '../../secciones/Search'
import HeroSection from '../../secciones/HeroSection'
import Certificados from '../../secciones/Certificados'
function Home() {
    const { t } = useTranslation();

    return (
        <>


            <HeroSection />
            <Search />
            <Servicios />
            <Destinos />
            <Tours />
            <Parallax />
            <About />
            <Testimonios />
            <Blog />
            <Certificados />
        </>
    )
}

export default Home
