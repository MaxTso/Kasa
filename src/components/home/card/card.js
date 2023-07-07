import React from 'react'
import "./styles/card.scss";
import { Link } from 'react-router-dom';

export default function Card({cover, title, id}) {
  return (
    <div className='card' key={id}>
        <Link className='link' to={`/logement/${id}`}></Link>
        <img src={cover} alt='appartement' key={id + '-img'}/>
        <h4 key={id + '-h4'}>{title}</h4>
    </div>
  )
}
