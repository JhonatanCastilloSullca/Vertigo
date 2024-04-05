import { Button, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap'
import './index.css'
import { FaSearch } from 'react-icons/fa'
import ToursData from '../../data/tours.json'
import { useState } from "react"


const SearchResultList = () => (
    <>
        <Row className='result-item p-0 m-0'>
            <Col md={2} className='p-0 m-0'>
                <img src="http://placehold.it/500x500" alt="" className='h-100 w-100 object-fit-cover p-4' />
            </Col>
            <Col md={10} className="d-flex align-items-center p-0 m-0">
                <div className="d-grid">
                    <div className="titulo-search ">
                        Tour Valle sagrado
                    </div>
                    <div className="categorias-search ">
                        Aventura
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='result-item p-0 m-0'>
            <Col md={2} className='p-0 m-0'>
                <img src="http://placehold.it/500x500" alt="" className='h-100 w-100 object-fit-cover p-4' />
            </Col>
            <Col md={10} className="d-flex align-items-center p-0 m-0">
                <div className="d-grid">
                    <div className="titulo-search ">
                        Tour Valle sagrado
                    </div>
                    <div className="categorias-search ">
                        Aventura
                    </div>
                </div>
            </Col>
        </Row>
    </>
)


function Search() {
    const [tours] = useState(ToursData.Search)
    const [input, setInput] = useState("");
    const handleChange = (value) => {
        setInput(value);
    }

    return (
        <>
            <div className="ftco-section ftco-no-pb ftco-no-pt">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="ftco-search d-flex justify-content-center">
                                <Row className='w-100'>
                                    <Col md={12} className="tab-wrap">
                                        <Tab.Content id="v-pills-tabContent">
                                            <Tab.Pane active id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                                                <Form className="search-property-1">
                                                    <Row >
                                                        <Col md className="d-flex">
                                                            <div className="form-group px-4 py-2 border-0">
                                                                <div className="form-field d-flex h2 m-0">
                                                                    <FaSearch className='icon-search' ></FaSearch>
                                                                    <Form.Control type="text" placeholder="Search place" className='h1 m-0 text-search' onChange={(e) => { e.target.value }} />

                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <SearchResultList />
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
