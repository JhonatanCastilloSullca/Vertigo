import './index.css'
import parallaxData from '../../data/parallax.json';
import { useFetch } from '../../Hook/useFetch';
import { useContext } from 'react';
import { GeneralContext } from '../../context/general';

function Parallax() {

    const { general: GeneralData } = useContext(GeneralContext);
    const cabeceraTipo = GeneralData.nosotros[0];
    // style={{ backgroundImage: `url(${parallax.imagen})` }}
    return (
        <div className="ftco-section ftco-about img" style={{ backgroundImage: "url('./src/assets/images/Lago-Salvador-_Parque-Nacional-del-Manu-Juan-Carlos.webp')" }}>
            <div className="overlay overlay-parallax"></div>
        </div>
    );
}

export default Parallax
