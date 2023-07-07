import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles/failed.scss"

export default function Failed() {
  return (
    <section className='failed_container'>
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <NavLink to="/" className={"back"}>Retourner sur la page d'accueil</NavLink>
    </section>
  )
}
