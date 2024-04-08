import { Card, Col, Container, Form, FormControl, FormGroup, Row } from "react-bootstrap"
import './index.css'
import CardTours from "../../componentes/CardTours"
import { useEffect, useState } from "react"
import { useFetch } from "../../Hook/useFetch"

function ToursArchive() {

    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
        body: JSON.stringify({})
    };

    const { data, loading, error } = useFetch("http://192.168.1.32/api/tours", requestOptions);

    const [category, setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState(0);
    const [keyword, setKeyword] = useState('');
    const [filters, setFilters] = useState({
        category: 'all',
        maxPrice: 0,
        keyword: ''
    });
    const [toursData, setToursData] = useState([]);
    useEffect(() => {
        if (data) {
            setToursData(data);
        }
    }, [data]);

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
        const newKeyword = event.target.value;
        setKeyword(newKeyword);
        setFilters(prevFilters => ({
            ...prevFilters,
            keyword: newKeyword
        }));
    };

    const filterTours = (tours) => {
        return tours.filter(tour => {
            const price = Number(tour.precio);
            return (
                price >= filters.maxPrice &&
                (filters.category === 'all' || tour.categoria.nombre === filters.category) &&
                tour.nombre.toLowerCase().includes(filters.keyword.toLowerCase())
            );
        });
    };

    const filteredTours = filterTours(toursData);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!toursData) return <div>No se encontraron tours</div>;



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
