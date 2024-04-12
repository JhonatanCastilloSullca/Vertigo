import { useState } from 'react'
import './index.css'
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../../Hook/useFetch';




function Header() {
    const { i18n } = useTranslation();
    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
    }
    const [click, setClick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }


    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
        body: JSON.stringify({
        })
    };
    const { data, loading, error } = useFetch("http://192.168.1.32/api/categorias", requestOptions);
    const tours = data;

    window.addEventListener('scroll', changeBackground);
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!tours) return <div>No se encontraron tours</div>;
    return (
        <>
            <nav className={navbar ? 'navbar active navbar-expand-lg' : 'navbar navbar-expand-lg'}  >
                <div className="container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        {navbar ? <img src="../src/assets/images/vertigo-logo-horizontal-2.webp" alt="logo-vertigo" /> : <img className='img-header-logo' src="../src/assets/images/vertigologo2.webp" alt="logo-vertigo" />}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        x
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto d-flex flex-row">
                            <li className="nav-item d-flex align-items-center text-white">
                                <NavLink to='/' className={({ isActive }) => {
                                    return isActive ? 'nav-link active' : ' nav-link'
                                }} onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </li>
                            {tours.map((tour) => (
                                <li className="nav-item d-flex align-items-center text-white" key={tour.id}>
                                    <NavLink to='/tours' className='nav-link' onClick={closeMobileMenu}>
                                        {tour.nombre}
                                    </NavLink>
                                </li>
                            ))}
                            <li className="nav-item d-flex align-items-center text-white">
                                <Dropdown>
                                    <Dropdown.Toggle as={NavLink} to='/tours' variant="transparent" id="dropdown-basic" className="nav-link p-0">
                                        Tours
                                    </Dropdown.Toggle>
                                    <Container>
                                        <Dropdown.Menu as="div" className='drpwdpwm-menu'>
                                            <div className="menuvertigo ">
                                                <Dropdown.Item>
                                                    <Row>
                                                        {tours.map((tour) => (
                                                            <Col md={3} key={tour.id}>
                                                                <NavLink to={`/tours/${tour.id}`} className='nav-link' onClick={closeMobileMenu}>
                                                                    {tour.nombre}
                                                                </NavLink>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </Dropdown.Item>
                                            </div>
                                        </Dropdown.Menu>
                                    </Container>
                                </Dropdown>
                            </li>
                            <li className="nav-item d-flex align-items-center text-white">
                                <DropdownButton
                                    id="language-selector"
                                    variant="transparent"
                                    className="nav-link p-0 bg-transparent"
                                    title={<><span className="ml-2">{i18n.language === 'es' ? <img src="../../src/assets/images/iconos/pe.svg" className='flags text-white' alt="Perú" /> : <img src="../../src/assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />}</span></>}
                                >
                                    <Dropdown.Item onClick={() => handleChangeLng('es')}>
                                        <img src="../../src/assets/images/iconos/pe.svg" className='flags' alt="Perú" />Español
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleChangeLng('en')}>
                                        <img src="../../src/assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />English
                                    </Dropdown.Item>
                                </DropdownButton>
                            </li>
                            <li className="nav-item d-flex align-items-center text-white">
                                <Cart></Cart>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header


