import { useEffect, useState } from 'react'
import './index.css'
import { Link, NavLink } from 'react-router-dom';

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

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbar ? 'navbar active navbar-expand-lg' : 'navbar navbar-expand-lg'}  >
                <div className="container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        EPIC
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
                            <li className="nav-item">
                                <NavLink to='/tours' className='nav-link'>
                                    Tours
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header


