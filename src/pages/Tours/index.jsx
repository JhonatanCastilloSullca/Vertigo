import { Accordion, Button, Card, Col, Container, Form, FormControl, FormGroup, InputGroup, ListGroup, Row } from "react-bootstrap"
import './index.css'
import Tours from "../../secciones/Tours"
import CardTours from "../../componentes/CardTours"
import { AiOutlineTeam } from "react-icons/ai"
import { FaCheck, FaTimes } from "react-icons/fa";
import { BsBackpack } from "react-icons/bs";


import { GiDuration } from "react-icons/gi"



function ToursPage() {

    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: "url('../../../src/assets/images/bg_5.jpg')" }}>
                <div className="container p-3">
                    <div className="row no-gutters slider-text js-mediumheight align-items-center">
                        <div className="col-md-7 ">
                            <span className="subheading">Bienvenido a vertigo  Travel</span>
                            <p className="caps">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla, ex nobis culpa iusto rem itaque consequatur illum fugiat dolore consequuntur saepe sapiente provident. Quod accusantium quidem fuga dolores architecto! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptatibus alias. Sit nisi, tenetur voluptate recusandae esse numquam unde quo corporis ad laborum? Sed excepturi, tenetur odit fugiat libero molestiae?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ftco-section services-section">
                <div className="container p-4">
                    <div className="row d-flex">
                        <div className="col-md-4">
                            <div className="row gap-4">
                                <Card>
                                    <Card.Body>
                                        <h3 className="box-title">Reserva con nosotros</h3>
                                        <div className="div-formulario ">
                                            <span>Fecha:</span>
                                            <Form.Control type="date" placeholder="" className="input-formulario fs-12" />
                                        </div>
                                        <div className="div-formulario ">
                                            <span>Celular:</span>
                                            <Form.Control type="text" placeholder="+51 999 999 999" className="input-formulario fs-12" />
                                        </div>
                                        <div className="div-formulario ">
                                            <span>E-mail:</span>
                                            <Form.Control type="email" placeholder="info@vertigotravelperu.com" className="input-formulario fs-12" />
                                        </div>
                                        <div className="submit_group">
                                            <button className="booking_form_submit"> Reservar Ahora</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <h3 className="box-title">Información del Tour</h3>
                                        <div className="card-information-tour ">
                                            <span className="icono-information-tour"><AiOutlineTeam /></span>
                                            <div className="items-information d-grid">
                                                <h5 className="item-tittle-information">Max. Personas</h5>
                                                <h5 className="item-description-information">Descripcion</h5>
                                            </div>
                                        </div>
                                        <div className="card-information-tour ">
                                            <span className="icono-information-tour"><AiOutlineTeam /></span>
                                            <div className="items-information d-grid">
                                                <h5 className="item-tittle-information">Edad Minima</h5>
                                                <h5 className="item-description-information">Descripcion</h5>
                                            </div>
                                        </div>
                                        <div className="card-information-tour ">
                                            <span className="icono-information-tour"><AiOutlineTeam /></span>
                                            <div className="items-information d-grid">
                                                <h5 className="item-tittle-information">Ubicacion del Tour</h5>
                                                <h5 className="item-description-information">Descripcion</h5>
                                            </div>
                                        </div>
                                        <div className="card-information-tour ">
                                            <span className="icono-information-tour"><AiOutlineTeam /></span>
                                            <div className="items-information d-grid">
                                                <h5 className="item-tittle-information">Idiomas disponibles</h5>
                                                <h5 className="item-description-information">Descripcion</h5>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <h3 className="box-title">Tours Relacionados</h3>
                                        <div className="card-information-tour related-tour gap-2">
                                            <img src='https://www.cuscoagency.com/assets/images/img-lugares/machupicchu-full-4.jpg' className='img-icono-tour-info-related' alt="" />
                                            <div className="items-information d-grid">
                                                <h5 className="item-description-information m-0 fs-18">Rainbow Mountain Red Valley</h5>
                                                <h5 className="item-tittle-information">From <span className="prices-item-information"> $319.00 </span></h5>
                                            </div>
                                        </div>
                                        <div className="card-information-tour related-tour gap-2">
                                            <img src='https://www.cuscoagency.com/assets/images/img-lugares/machupicchu-full-4.jpg' className='img-icono-tour-info-related' alt="" />
                                            <div className="items-information d-grid">
                                                <h5 className="item-description-information m-0 fs-18">Rainbow Mountain Red Valley</h5>
                                                <h5 className="item-tittle-information">From <span className="prices-item-information"> $319.00 </span></h5>
                                            </div>
                                        </div>
                                        <div className="card-information-tour related-tour gap-2">
                                            <img src='https://www.cuscoagency.com/assets/images/img-lugares/machupicchu-full-4.jpg' className='img-icono-tour-info-related' alt="" />
                                            <div className="items-information d-grid">
                                                <h5 className="item-description-information m-0 fs-18">Rainbow Mountain Red Valley</h5>
                                                <h5 className="item-tittle-information">From <span className="prices-item-information"> $319.00 </span></h5>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="col-md-8 heading-section">
                            <div className="w-100">
                                <Container className="bg-primary border rounded">
                                    <Row>
                                        <Col>
                                            <div className="icono-tour-cusco p-2">
                                                <div className="icono-diarios">
                                                    <img src='https://imgur.com./TjIIrcz.png' className='img-icono-tour-info' alt="" />
                                                </div>
                                                <div className="icono-diarios-text">
                                                    <p className="m-0"><b>Dificultad</b></p>
                                                    <span>Fácil</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="icono-tour-cusco p-2">
                                                <div className="icono-diarios">
                                                    <img src='https://imgur.com./TjIIrcz.png' className='img-icono-tour-info' alt="" />
                                                </div>
                                                <div className="icono-diarios-text">
                                                    <p className="m-0"><b>Dificultad</b></p>
                                                    <span>Fácil</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                <Container className="mt-4 p-0">
                                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header > <h6 className="fw-bold text-primary ">Dia 1: Recojo y bienvendia</h6></Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header ><h6 className="fw-bold text-blue ">Dia 2: Llegada y visita de lugares arqueologicos</h6></Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Container>
                                <Container className="mt-4 p-0">
                                    <Card>
                                        <Card.Body className="">
                                            <h3 className="box-title m-0">Tour Incluye</h3>
                                            <Row className="pt-4">
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-check"><FaCheck /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Container>
                                <Container className="mt-4 p-0">
                                    <Card>
                                        <Card.Body className="">
                                            <h3 className="box-title m-0">Tour No Incluye</h3>
                                            <Row className="pt-4">
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-times"><FaTimes /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Container>
                                <Container className="mt-4 p-0">
                                    <Card>
                                        <Card.Body className="">
                                            <h3 className="box-title m-0">Que Llevar</h3>
                                            <Row className="pt-4">
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                                <Col md={4} className="d-flex justify-content-center">
                                                    <span className="icono-backpack"><BsBackpack /></span>
                                                    <h5 className="item-tittle-information text-check">Ubicacion del Tour</h5>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Container>
                                <Container className="mt-4 p-0">
                                    <Row >
                                        <Col className="d-flex justify-content-center">
                                            <Row>
                                                <Col className="d-flex justify-content-center">
                                                    <Card className="border-0">
                                                        <Card.Img variant="top" src="https://www.cuscoagency.com/assets/images/img-lugares/machupicchu-full-4.jpg" />
                                                    </Card>
                                                </Col>
                                                <Col className="d-flex justify-content-center">
                                                    <Card className="border-0">
                                                        <Card.Img variant="top" src="https://www.cuscoagency.com/assets/images/img-lugares/machupicchu-full-4.jpg" />
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ToursPage
