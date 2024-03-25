import { Accordion, Card, Col, Container, ListGroup, Row } from "react-bootstrap"
import CardActividades from "../../componentes/CardActividades"
import './index.css'



function Tours() {

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
                                <Card className="">
                                    <Card.Body>
                                        <Card.Title className="fw-bold ">Incluye</Card.Title>
                                        <Card.Text>
                                            <ListGroup as="ol" numbered className="border-0">
                                                <ListGroup.Item className="border-0 p-0" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item className="border-0 p-0" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item className="border-0 p-0" as="li">Cras justo odio</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="">
                                    <Card.Body>
                                        <Card.Title className="fw-bold ">No Incluye</Card.Title>
                                        <Card.Text>
                                            <ListGroup as="ol" numbered className="border-0">
                                                <ListGroup.Item className="border-0 p-0" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item className="border-0 p-0" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item className="border-0 p-0" as="li">Cras justo odio</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="">
                                    <Card.Body>
                                        <Card.Title className="fw-bold ">Que llevar</Card.Title>
                                        <Card.Text>
                                            <ListGroup as="ol" numbered className="border-0">
                                                <ListGroup.Item className="border-0 p-0" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item className="border-0 p-0" as="li">Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item className="border-0 p-0" as="li">Cras justo odio</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Text>
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
                            </div>
                        </div>
                    </div>
                </div>
                <Container>
                    <h1>sda</h1>
                </Container>
            </div>
        </>
    )
}

export default Tours
