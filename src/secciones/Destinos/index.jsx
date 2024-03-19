import './index.css'

function Destinos() {
    return (
        <>
            <div className="ftco-section img ftco-select-destination" style={{ backgroundImage: "url('../../../src/assets/images/bg_3.jpg')" }}>
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center">
                            <span className="subheading">Nuestros paquetes a nivel nacional</span>
                            <h2 className="mb-4">Selecciona tu destino favorito</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: "url('../../../src/assets/images/place-1.jpg')" }}>
                                            <div className="text">
                                                <h3>Philippines</h3>
                                                <span>8 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="project-destination">
                                        <a href="#" className="img" style={{ backgroundImage: "url('../../../src/assets/images/place-1.jpg')" }}>
                                            <div className="text">
                                                <h3>Philippines</h3>
                                                <span>8 Tours</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinos
