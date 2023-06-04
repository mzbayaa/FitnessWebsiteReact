import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

//i class name click is for hamburger
//handleClick swaps hamberger between clicks 20min
//useNavigate istead of link (Ahmad)
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const[button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                {/* logo */}
                <Link to="/" className="navbar-logo">
                    HABIBI MUSCLE CLUB
                </Link>  
                <div className='menu-icon'onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>
                {/* clicking button will make it disapear after selection */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        {/* Home button */}
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        {/* Services button */}
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}> 
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        {/* Our Trainers button */}
                        <Link to='/our-trainers' className='nav-links' onClick={closeMobileMenu}> 
                            Our Trainers
                        </Link>
                    </li>
                    <li className='nav-item'>
                        {/* Contact Us button */}
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}> 
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        {/* book now button */}
                        <Link to='/book-now' className='nav-links-mobile' onClick={closeMobileMenu}> 
                            Book Now
                        </Link>
                    </li>
                </ul>
                {/* button component */}
                {button && <Button buttonStyle='btn--outline'>BOOK NOW</Button>}
            </div>
        </nav>
    </> 
  ); 
}

export default Navbar;
