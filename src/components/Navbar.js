import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//i class name click is for hamberger
//handleClick swaps hamberger between clicks 20min
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    HABIBI MUSCLE CLUB
                </Link>  
                <div className='menu-icon'onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </> 
  ); 
}

export default Navbar;
