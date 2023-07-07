import React from 'react'
import './styles/tag.scss'

export default function Tag({tag}) {
  return (
    <div className='tag'>
        <p>{tag}</p>
    </div>
  )
}
