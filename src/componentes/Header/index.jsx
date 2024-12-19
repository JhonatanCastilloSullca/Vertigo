import { useContext, useState, useEffect } from 'react';
import './index.css';
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart';
import { Accordion, Button, Card, Col, Container, Dropdown, DropdownButton, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../../Hook/useFetch';
import { GeneralContext } from '../../context/general';
import { DotLoader } from 'react-spinners';
import Imagen from '../../assets/images/manu1.png';

function Header() {
    const { general } = useContext(GeneralContext);
    const GeneralData = general.menus;
    const [imgpreview, setImgPreview] = useState(Imagen);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 992);

    const handleSlugTour = (imagen) => {
        setImgPreview(imagen || Imagen);
    };
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const handleClose = () => setExpanded(false);
    const { t, i18n } = useTranslation("translation");

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lng', lng);
        if (window.location.pathname.substring(0, 6) === "/tours") {
            window.location.href = window.location.origin;
        } else {
            window.location.href = window.location.origin;
        }
    };

    const [navbar, setNavbar] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMouseEnter = (menuId) => {
        setActiveMenu(menuId);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const renderMenu = (menu) => {
        if (activeMenu === menu.id) {
            return (
                <Container className='container-menu'>
                    <div className="drpwdpwm-menu">
                        <Row>
                            <Container className=' d-flex justify-content-center align-items-start'>
                                <Col md={12}>
                                    <Row className='d-flex justify-content-center align-items-start'>
                                        {menu.detalles && menu.detalles.length > 0 ? (
                                            (() => {
                                                // Agrupar categorías consecutivas con tours.length <= 3
                                                const groupedCategories = [];
                                                let tempGroup = [];

                                                menu.detalles.forEach((categoria, index) => {
                                                    const currentLength = categoria.categoria.tours.length;
                                                    const nextLength = menu.detalles[index + 1]?.categoria.tours.length || 0;

                                                    tempGroup.push(categoria);

                                                    // Si la siguiente no cumple o no existe, cerramos el grupo
                                                    if (currentLength > 3 || nextLength > 3 || !menu.detalles[index + 1]) {
                                                        groupedCategories.push([...tempGroup]);
                                                        tempGroup = [];
                                                    }
                                                });

                                                // Renderizar los grupos
                                                return groupedCategories.map((group, groupIndex) => (
                                                    <Col key={groupIndex} className='p-0 px-2'>
                                                        {group.map((categoria) => (
                                                            <div key={categoria.id}>
                                                                <span className='nav-link tittle-categoria-header w-100'>
                                                                    {categoria.categoria.nombre}
                                                                </span>
                                                                <Row>
                                                                    <Col className='d-grid gap-1 height-menu'>
                                                                        {categoria.categoria.tours.map((tour) => (
                                                                            <NavLink
                                                                                to={`/tours/${tour.slug}`}
                                                                                onMouseOver={() => handleSlugTour(tour.imagenprincipal)}
                                                                                className='w-100 border-bot-menu p-0'
                                                                                key={tour.id}
                                                                            >
                                                                                <div className="menu-title-nav pt-2">{tour.nombre}</div>
                                                                            </NavLink>
                                                                        ))}
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        ))}
                                                    </Col>
                                                ));
                                            })()
                                        ) : (
                                            <li>No hay categorías disponibles</li>
                                        )}
                                    </Row>

                                </Col>

                                {/* <Col md={4} className='d-flex justify-content-center align-items-center'>
                                    <div className='d-flex justify-content-center rounded'>
                                        <img
                                            src={imgpreview}
                                            alt="imagen"
                                            className='img-fluid p-4 img-menu'
                                        />
                                    </div>
                                </Col> */}
                            </Container>
                        </Row>
                    </div>
                </Container>
            );
        }
        return null;
    };

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        window.addEventListener('resize', () => setIsMobileView(window.innerWidth < 992));

        return () => {
            window.removeEventListener('scroll', changeBackground);
            window.removeEventListener('resize', () => setIsMobileView(window.innerWidth < 992));
        };
    }, []);

    const requestOptions = {
        method: 'POST',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNmJjZWFhNWFlYWRkZTQyNDY3ZDZkYmJmMTVlMDhkMmVjMjZkZGM4Yjc5ZDZlZWM5NGIwODliOWRlMDUzNTdlMmE5YWUyOTc4ZjVhYzM5MTQiLCJpYXQiOjE2OTEwMDUwMDMuMjI5NzQzLCJuYmYiOjE2OTEwMDUwMDMuMjI5NzQ2LCJleHAiOjE3MjI2Mjc0MDMuMTA4MzU0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VPsULN8PnrW5EzFxiYlyn5R8ML4w0le-FvZFf1IxMOj2o2NVMUg-EERqJdKV3YWn2NquVgW8-SOPkmCtWJ4kfA_UZdaJ2JUkm0qo39cSNLt2AylXP8s4_pBK6cVBI8xo98fTkcoXgj-hDk6B04t4S2wIu7ddxSfgVdcWbVorN4Woac4i40d3xf6Iu-DnOfs6m5RKGDpOrzExQDrIn6A5_efpcNf1-I3rGgf00aAar2vKtdtZjFAzcVpDKMLm36Q-A0Yl54uEuC_e2RI2nsRhjtK7P0CwSPXzYyz29lU_k47WWJp4nVb0prt_-D5OHHk81LkFZqTiuiw5AB88_l3q65PG20oo8HSTW2c3hV1XPFHwhdVsjLncFX3TWhHUyHAIN48qBOiXl9JVmfeUj6t6uTurjRnaH-kykSke2dUPE77gCiMsLDUYA1dMD8EU42Y3F1tLWs4_CoXiwpjR2TGdjACY4FBHPwOAyrBpLIUKypeBcx3xrWcU2uZS7iTtQS_C2uhGyeMy0xSeBr0S0GICoJmiHmRUMc9gEHzlv40ObZpncXmw7VX1Txc5-DS6Y-GgjKjIPmmVQOWSJbjU7OqMtSaGyjmOTtECwgtlmFpfwEi0_g8L8T2OzgZVYOOROkzxOYnuCB1NLfj2N-NFcZ1cXUvB915l8C-v5ZD9Uulmxmsi',
        body: JSON.stringify({})
    };

    const { data, loading, error } = useFetch("https://api.vertigotravelperu.com/api/categorias", requestOptions);
    const categorias = data;

    if (loading) return (
        <div className="mainloader">
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <DotLoader color="#f79633" loading={true} size={100} />
            </div>
        </div>
    );

    if (error) return (
        <div className="mainloader">
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <DotLoader color="#ff0011" loading={true} size={100} />
            </div>
        </div>
    );

    if (!categorias) return <div>No se encontraron tours</div>;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>


            {isMobileView ? (
                <Navbar expand="lg" className='p-0 bg-primary' expanded={expanded}>
                    <Navbar.Brand href="#">
                        <img
                            src="../assets/images/vertigologo2.webp"
                            height="30"
                            className="d-inline-block align-top px-4"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <DropdownButton
                        id="language-selector"
                        variant="transparent"
                        className="nav-link p-0 bg-transparent"
                        title={<span className="ml-2">{i18n.language === 'es' ? <img src="../../assets/images/iconos/pe.svg" className='flags text-white' alt="Perú" /> : <img src="../../assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />}</span>}
                    >
                        <Dropdown.Item onClick={() => handleChangeLng('es')}>
                            <img src="../../assets/images/iconos/pe.svg" className='flags' alt="Perú" />Español
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleChangeLng('en')}>
                            <img src="../../assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />English
                        </Dropdown.Item>
                    </DropdownButton>
                    <Navbar.Toggle aria-controls="basic-navbar-nav px-4" onClick={handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav" className='bg-light'>
                        <Nav className="ml-auto bg-menuvertigo">
                            {GeneralData.map((menu) => (
                                <NavDropdown title={menu.nombre} id={`nav-dropdown-${menu.id}`} key={menu.id}>
                                    {menu.detalles.map((detalle) => (
                                        <NavDropdown title={detalle.categoria.nombre} id={`nav-subdropdown-${detalle.id}`} key={detalle.id}>
                                            {detalle.categoria.tours.map((tour) => (
                                                <NavLink
                                                    to={`/tours/${tour.slug}`}
                                                    onClick={handleClose}
                                                    onMouseOver={() => handleSlugTour(tour.imagenprincipal)}
                                                    className='w-100 border-bot-menu p-0'
                                                    key={tour.id}
                                                >
                                                    <div className="menu-title-nav pt-2">{tour.nombre}</div>
                                                </NavLink>
                                            ))}
                                        </NavDropdown>
                                    ))}
                                </NavDropdown>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
                : (
                    <nav className={navbar ? 'navbar active navbar-expand-lg' : 'navbar navbar-expand-lg'}>
                        <div className="container mw-100 px-5">
                            <Link to='/' className='navbar-logo'>
                                {navbar ? <img src="../assets/images/vertigologo2.webp" alt="logo-vertigo" className='logo-hor' /> : <img className='img-header-logo' src="../assets/images/vertigologo2.webp" alt="logo-vertigo" />}
                            </Link>
                            <button className="navbar-toggler" type="button" onClick={toggleMobileMenu}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={isMobileMenuOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                                <ul className="navbar-nav ml-auto d-flex flex-row">
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                            {t("header.home")}
                                        </NavLink>
                                    </li>
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <NavLink to='/nosotros' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                            {t("header.about")}
                                        </NavLink>
                                    </li>
                                    {GeneralData.filter(menu => menu.tipo === '1').map((menu) => (
                                        <li className="nav-item d-flex align-items-center text-white" key={menu.id}>
                                            <div
                                                className="nav-item"
                                                onMouseEnter={() => handleMouseEnter(menu.id)}
                                                onMouseLeave={() => handleMouseLeave(menu.id)}
                                            >
                                                <NavLink className={({ isActive }) => isActive ? 'nav-link' : 'nav-link active'}>
                                                    {menu.nombre ? menu.nombre : 'Nombre no disponible'}
                                                </NavLink>
                                                {renderMenu(menu)}
                                            </div>
                                        </li>
                                    ))}
                                    
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <NavLink to='/contacto' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                            {t("header.contact")}
                                        </NavLink>
                                    </li>
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <NavLink to='/dorado' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                            DORADO LODGE
                                        </NavLink>
                                    </li>
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <DropdownButton
                                            id="language-selector"
                                            variant="transparent"
                                            className="nav-link p-0 bg-transparent"
                                            title={<span className="ml-2">{i18n.language === 'es' ? <img src="../../assets/images/iconos/pe.svg" className='flags text-white' alt="Perú" /> : <img src="../../assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />}</span>}
                                        >
                                            <Dropdown.Item onClick={() => handleChangeLng('es')}>
                                                <img src="../../assets/images/iconos/pe.svg" className='flags' alt="Perú" />Español
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleChangeLng('en')}>
                                                <img src="../../assets/images/iconos/us.svg" className='flags' alt="Estados Unidos" />English
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </li>
                                    <li className="nav-item d-flex align-items-center text-white">
                                        <Cart />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                )
            }
        </>
    );
}

export default Header;
