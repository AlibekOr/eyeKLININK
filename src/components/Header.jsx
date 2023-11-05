import React from 'react'
import PricesAll from './PricesAll'
import { NavLink } from 'react-router-dom'
import "../style/style.scss"
const Header = () => {
    const { allCount } = PricesAll()
    return (
        <header className='header'>
            <NavLink className={'header__navLink'} to={'/'}>Home</NavLink>
            <NavLink className={'header__navLink'} to={'/cart'}>Cart  пш({allCount})</NavLink>
        </header>
    )
}

export default Header