import React, { useEffect, useState } from 'react'
import "./styles/boxtitle.scss"

export default function Boxtitle({text}) {
    const [data, setData] = useState()

    useEffect(() => {
      let page = window.location.pathname === '/' ? 'box__title' : 'box__about'
      setData(page)
    }, [])
    
  return (
    <div className={data}>
        <h1 className='Title__homepage'>{text}</h1>
    </div>
  )
}
