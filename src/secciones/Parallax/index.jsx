import './index.css'
import parallaxData from '../../data/parallax.json';


function Parallax() {
    const parallax = parallaxData.Search[0];
    return (
        <>
            <div className="ftco-section ftco-about img" style={{ backgroundImage: `url(${parallax.imagen})` }}>
                <div className="overlay"></div>
            </div>
        </>
    )
}

export default Parallax
