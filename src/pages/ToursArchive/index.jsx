import { Card, Col, Container, Form, FormControl, FormGroup, Row } from "react-bootstrap"
import './index.css'
import CardTours from "../../componentes/CardTours"
import ToursData from '../../data/tours.json'
import { useState } from "react"

function ToursArchive() {


    const [category, setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState(0);
    const [keyword, setKeyWord] = useState('');
    const [filters, setFilters] = useState({
        category: 'all',
        maxPrice: 0,
        keyword: ''
    });


    const handleChange = (event) => {
        const newCategory = event.target.id;
        setCategory(newCategory);
        setFilters(prevFilters => ({
            ...prevFilters,
            category: newCategory
        }));

    };

    const handleChangeMaxPrice = (event) => {
        const newMaxPrice = event.target.value;
        setMaxPrice(newMaxPrice);
        setFilters(prevFilters => ({
            ...prevFilters,
            maxPrice: newMaxPrice
        }));
    };
    const handleChangeKeyword = (event) => {
        const newKeyWord = event.target.value;
        setKeyWord(newKeyWord);
        setFilters(prevFilters => ({
            ...prevFilters,
            keyword: newKeyWord
        }));
    };

    const [tours] = useState(ToursData)
    const filterTours = (tours) => {
        return tours.filter(tour => {
            const precio = Number(tour.Precio);
            return (
                precio >= filters.maxPrice &&
                (filters.category === 'all' || tour.CategoriaTour === filters.category) &&
                tour.Titulo.toLowerCase().includes(filters.keyword.toLowerCase())
            );
        });
    };
    const filteredTours = filterTours(tours)
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
            <Container className="mt-4">
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Form className="filter-form">
                                    <FormGroup className="mb-3 form-group-filter" controlId="BuscarInput">
                                        <Form.Label className="form-control-sm m-0 font-weight-bolder">Buscar </Form.Label>
                                        <FormControl type="text" value={filters.keyword}
                                            onChange={handleChangeKeyword} className="input-formulario-filter fs-12" />
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Form.Label className="form-control-sm m-0 font-weight-bolder">Características</Form.Label>
                                        <div>
                                            <Form.Check
                                                type="radio"
                                                label="Cultural"
                                                id="cultural"
                                                className="fs-14"
                                                name="caracteristicas"
                                                onChange={handleChange}
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Historico"
                                                id="historico"
                                                className="fs-14"
                                                name="caracteristicas"
                                                onChange={handleChange}
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Aventura"
                                                id="aventura"
                                                className="fs-14"
                                                name="caracteristicas"
                                                onChange={handleChange}
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Todos"
                                                id="all"
                                                className="fs-14"
                                                name="caracteristicas"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="mb-3" controlId="FiltroRadio">
                                        <Form.Label className="form-control-sm m-0 font-weight-bolder">Precio Maximo</Form.Label>
                                        <div className="d-flex gap-2">
                                            <Form.Range
                                                variant="primary"
                                                min={0}
                                                max={1000}
                                                defaultValue={0}
                                                onChange={handleChangeMaxPrice}
                                            />
                                            <span>{maxPrice}</span>
                                        </div>
                                    </FormGroup>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <CardTours tours={filteredTours} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ToursArchive
