import React from 'react';
import './Button.css';
import  { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

// style button applies what buttonStyle is (1 of 2 options) otherwise puts default first position in const
export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/book-now' className='btn-mobile'>
            {/* what's passed as "children" gets displayed as component */}
            <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
};