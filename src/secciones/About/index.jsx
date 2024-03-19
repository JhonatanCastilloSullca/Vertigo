import './index.css'

function About() {
    return (
        <>
            <div className="ftco-section ftco-about ftco-no-pt img">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-12 about-intro">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="img d-flex w-100 align-items-center justify-content-center" style={{ backgroundImage: "url('../../../src/assets/images/about-1.jpg')" }}>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-md-5 py-5">
                                    <div className="row justify-content-start pb-3">
                                        <div className="col-md-12 heading-section">
                                            <span className="subheading">Sobre Nosotros</span>
                                            <h2 className="mb-4">Subtitulo</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis magni reprehenderit eum obcaecati.
                                                Velit maiores dolor quod unde reiciendis vitae qui aliquid. Sed, placeat exercitationem nam laboriosam facilis esse ducimus.
                                                orem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus voluptates voluptatibus veritatis nemo alias nulla recusandae,
                                                cumque autem perferendis? Distinctio repudiandae corrupti minus architecto voluptatem maxime iste sed vero!</p>
                                            <p><a href="#" className="btn btn-primary">Reserva con nosotros</a></p>
                                        </div>
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

export default About
