import React from 'react'
import './styles/Foot.scss'
import logo from '../assets/logoFooter.png'

export default function Foot() {
  return (
    <footer className='footer'>
      <img src={logo} alt='logo'></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
