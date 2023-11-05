import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style/style.scss"
const Header = () => {
    return (
        <header className='header'>
            <NavLink className={'header__navLink'} to={'/'}>Home</NavLink>
            <NavLink className={'header__navLink'} to={'/cart'}>Cart</NavLink>
        </header>
    )
}

export default Header