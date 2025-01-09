import { Card, Col, Container, Form, FormControl, FormGroup, Row } from "react-bootstrap"
import './index.css'
import CardTours from "../../componentes/CardTours"
import { useContext, useEffect, useState } from "react"
import { useFetch } from "../../Hook/useFetch"
import { GeneralContext } from "../../context/general"
import { DotLoader } from "react-spinners"
import BlogCard from "../../componentes/BlogCard"

function BlogsArchive() {


    const languageId = localStorage.lng === 'es' ? 1 : localStorage.lng === 'en' ? 2 : 1;
    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
        body: {
            language_id: languageId
        }
    };

    const { data: GeneralData, loading: generalLoading, error: generalError } = useFetch("https://api.vertigotravelperu.com/api/categorias", requestOptions);
    const { data: tourData, loading: tourLoading, error: tourError } = useFetch("https://api.vertigotravelperu.com/api/blogs/", requestOptions);


    const [filteredCount, setFilteredCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [keyword, setKeyword] = useState('');
    const [filters, setFilters] = useState({
        keyword: ''
    });
    const [toursData, setToursData] = useState([]);
    useEffect(() => {
        if (tourData) {
            setToursData(tourData);
            updateFilteredCount(tourData);
        }
    }, [tourData, filters]);
    const paginate = (array, page_size, page_number) => {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    };





    const updateFilteredCount = (data) => {
        const filtered = filterTours(data);
        setFilteredCount(filtered.length);
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
            return (
                tour.titulo.toLowerCase().includes(filters.keyword.toLowerCase())
            );
        });
    };

    const filteredTours = filterTours(toursData);

    const paginatedTours = paginate(filteredTours, itemsPerPage, currentPage);

    const totalPages = Math.ceil(filteredTours.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginationItems = Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page)}>
                {page}
            </button>
        </li>
    ));

    if (tourLoading) return <div className="mainloader">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <DotLoader color="#28a745" loading={true} size={100} />
        </div>
    </div>;
    if (tourError) return <div>Error: {tourError.message}</div>;
    if (!toursData) return <div>No se encontraron tours</div>;



    return (
        <>
            <div className="hero-wrap js-mediumheight" style={{ backgroundImage: "url('../../../assets/images/image_4.jpg')" }}>
                <div className="container p-3">
                    <div className="row no-gutters slider-text js-mediumheight align-items-center justify-content-center text-center">
                        <div className="col-md-7 ">
                            <span className="subheading font-weight-bold text-white">Bienvenido a vertigo  Travel</span>
                            <p className="caps">
                                Somos una empresa cusqueña dinámica que genera experiencias turísticas de calidad en turismo cultural, de naturaleza, de aventura y comunitario. Con más de 10 años diseñando productos turísticos en el sur del Perú, ofrecemos una oferta diversificada y contribuimos a la preservación cultural y natural de nuestro país. Además capacitamos constantemente a nuestro personal y aliados estratégicos en nuestros diferentes destinos, lo que nos permite garantizar altos estándares de calidad.


                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Container className="mt-4">
                <Row>
                    <Col md={12}>
                        <Card className="border-none">
                            <Card.Body className="border-none">
                                <Form className="filter-form">
                                    <FormGroup className="mb-3 form-group-filter" controlId="BuscarInput">
                                        <Form.Label className="form-control-sm m-0 font-weight-bolder">Buscar Blog </Form.Label>
                                        <FormControl type="text" value={filters.keyword}
                                            onChange={handleChangeKeyword} className="input-formulario-filter fs-12" placeholder="Ejm. Viajar por Cusco..." />
                                    </FormGroup>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <div className="mb-3">
                                <p>Mostrando {filteredCount} resultados</p>
                            </div>
                            <div className="mb-3">
                                <ul className="pagination">
                                    {paginationItems}
                                </ul>
                            </div>
                            <div className="row d-flex">
                                {paginatedTours.map(blog => (
                                    <div className="col-md-4 d-flex " key={blog.id}>
                                        <BlogCard blog={blog} />

                                    </div>
                                ))}
                            </div>
                            <div className="mb-3">
                                <ul className="pagination">
                                    {paginationItems}
                                </ul>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BlogsArchive
