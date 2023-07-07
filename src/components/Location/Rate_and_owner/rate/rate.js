import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './styles/rate.scss'

export default function Rate({rate}) {
  return <FontAwesomeIcon icon={faStar} className={rate}/>
  }
