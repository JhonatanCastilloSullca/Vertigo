import { useState } from 'react'
import './index.css'
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart';
import { Dropdown } from 'react-bootstrap';
import ToursData from '../../data/tours.json';



function Header() {

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

    const tours = ToursData.Search;




    window.addEventListener('scroll', changeBackground);

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
                            <li className="nav-item">
                                <NavLink to='/' className={({ isActive }) => {
                                    return isActive ? 'nav-link active' : ' nav-link'
                                }} onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item d-flex align-items-center text-white">
                                <Dropdown>
                                    <Dropdown.Toggle as={NavLink} to='/tours' variant="transparent" id="dropdown-basic" className="nav-link p-0">
                                        Tours
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {tours.map((tour) => (
                                            <Dropdown.Item as="div" key={tour.id}>
                                                <NavLink to={`/tours/${tour.id}`} className='nav-link' onClick={closeMobileMenu}>
                                                    {tour.Titulo}
                                                </NavLink>
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>
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


