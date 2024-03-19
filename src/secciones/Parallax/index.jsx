import './index.css'

function Parallax() {
    return (
        <>
            <div className="ftco-section ftco-about img" style={{ backgroundImage: "url('../../../src/assets/images/bg_4.jpg')" }}>
                <div className="overlay"></div>
                <div className="container py-md-5">
                    <div className="row py-md-5">
                        <div className="col-md d-flex align-items-center justify-content-center">
                            <a href="https://vimeo.com/45830194"
                                className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
                                <span className="fa fa-play"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Parallax
