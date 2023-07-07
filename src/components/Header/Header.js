import React from 'react';
import logo from '../assets/LOGO.png'
import HeaderLink from './Navlink';
import './styles/header.scss'


function Header({navlist}){

    return (
        <header className='header__container'>
            <img src={logo} alt='logo de kasa' />
            <nav>
                {Object.entries(navlist).map(([key, value]) => {
                    return <HeaderLink key={key} path={value} str={key}/>
                })}
            </nav>
        </header>
    )
}

export default Header