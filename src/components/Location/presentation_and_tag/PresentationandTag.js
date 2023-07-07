import './styles/presentation.scss'
import React from 'react'
import Tag from './tag/Tag'

export default function PresentationandTag({title, location, tag}) {
  
  return (
    <div className='titleownercontainer'>
        <div className='titleandlocation'>
            <h1>{title}</h1>
            <p>{location}</p>
        </div>
        <div className='tag__container'>
            {tag.map((e)=> {
                return <Tag tag={e} key={e}/>
            })}
        </div>
    </div>
  )
}
