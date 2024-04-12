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
        <div className="ftco-section ftco-about img" >
            <div className="overlay"></div>
        </div>
    );
}

export default Parallax
