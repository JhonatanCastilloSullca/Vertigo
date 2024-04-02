
import './index.css'

function Footer() {
    return (
        <>
            <div className="footer-prueba">
            </div>
            <footer className="ftco-footer bg-bottom ftco-no-pt" style={{ backgroundImage: "url('../../../src/assets/images/bg_3.jpg')" }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md pt-5">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Sobre nosotros</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quasi voluptatem nesciunt laborum voluptatum iure corrupti perferendis expedita omnis impedit! Omnis reiciendis illum ut doloribus in odit suscipit aut ea?</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                                    <li className=""><a href="#"><span className="fa fa-twitter"></span></a></li>
                                    <li className=""><a href="#"><span className="fa fa-facebook"></span></a></li>
                                    <li className=""><a href="#"><span className="fa fa-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Categoria de Tours</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">Online Enquiry</a></li>
                                    <li><a href="#" className="py-2 d-block">General Enquiries</a></li>
                                    <li><a href="#" className="py-2 d-block">Booking Conditions</a></li>
                                    <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
                                    <li><a href="#" className="py-2 d-block">Refund Policy</a></li>
                                    <li><a href="#" className="py-2 d-block">Call Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md pt-5 border-left">
                            <div className="ftco-footer-widget pt-md-5 mb-4">
                                <h2 className="ftco-heading-2">Contactanos</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon fa fa-map-marker"></span><span className="text">Direcion 123 -A</span></li>
                                        <li><a href="#"><span className="icon fa fa-phone"></span><span className="text">+51 999 999 999</span></a></li>
                                        <li><a href="#"><span className="icon fa fa-paper-plane"></span><span
                                            className="text">info@vertigotravel.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <p>
                                Vertigo

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer


