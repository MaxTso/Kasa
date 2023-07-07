import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/navlink.scss'

export default function HeaderLink({path, str}) {
  return (
    <NavLink 
    to={path}
    className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : 'navlink'}
    >{str}</NavLink>
  )
}
