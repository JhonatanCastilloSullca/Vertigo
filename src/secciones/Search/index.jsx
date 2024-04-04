import { Button, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap'
import './index.css'

function Search() {
    return (
        <>

            <div className="ftco-section ftco-no-pb ftco-no-pt">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="ftco-search d-flex justify-content-center">
                                <Row>
                                    <Col md={12} className="nav-link-wrap">
                                        <Nav className="nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <Nav.Item>
                                                <Nav.Link className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1">Search Tour</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col md={12} className="tab-wrap">
                                        <Tab.Content id="v-pills-tabContent">
                                            <Tab.Pane active id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                                                <Form className="search-property-1">
                                                    <Row>
                                                        <Col md className="d-flex">
                                                            <div className="form-group p-4 border-0">
                                                                <Form.Label>Destination</Form.Label>
                                                                <div className="form-field">
                                                                    <div className="icon"><span className="fa fa-search"></span></div>
                                                                    <Form.Control type="text" placeholder="Search place" />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md className="d-flex">
                                                            <div className="form-group p-4">
                                                                <Form.Label>Check-in date</Form.Label>
                                                                <div className="form-field">
                                                                    <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                    <Form.Control type="text" className="checkin_date" placeholder="Check In Date" />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md className="d-flex">
                                                            <div className="form-group p-4">
                                                                <Form.Label>Check-out date</Form.Label>
                                                                <div className="form-field">
                                                                    <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                    <Form.Control type="text" className="checkout_date" placeholder="Check Out Date" />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md className="d-flex">
                                                            <div className="form-group p-4">
                                                                <Form.Label>Price Limit</Form.Label>
                                                                <div className="form-field">
                                                                    <div className="select-wrap">
                                                                        <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                                        <Form.Control as="select" className="form-control">
                                                                            <option value="">$100</option>
                                                                            <option value="">$10,000</option>
                                                                            <option value="">$50,000</option>
                                                                            <option value="">$100,000</option>
                                                                            <option value="">$200,000</option>
                                                                            <option value="">$300,000</option>
                                                                            <option value="">$400,000</option>
                                                                            <option value="">$500,000</option>
                                                                            <option value="">$600,000</option>
                                                                            <option value="">$700,000</option>
                                                                            <option value="">$800,000</option>
                                                                            <option value="">$900,000</option>
                                                                            <option value="">$1,000,000</option>
                                                                            <option value="">$2,000,000</option>
                                                                        </Form.Control>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md className="d-flex">
                                                            <div className="form-group d-flex w-100 border-0">
                                                                <div className="form-field w-100 align-items-center d-flex">
                                                                    <Button type="submit" className="align-self-stretch form-control btn btn-primary">Search</Button>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Search
