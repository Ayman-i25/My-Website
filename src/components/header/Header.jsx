import './Header.css'
import React from 'react'
const Header = ({ title, dec }) => {
    
    return (
        <div className='container'>

        <div className='header text-center pb-3'>
            <h2>{title}</h2>
            <p>{dec}</p>
        </div>
        </div>
    )
}

export default Header
