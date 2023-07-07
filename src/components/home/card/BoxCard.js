import React, { useEffect, useState } from 'react'
import "./styles/BoxCard.scss";
import Card from './card';


export default function BoxCard({data}) {
  const [datas, setData] = useState()

  useEffect(() => {
    setData(data);
  }, [data])

  if (!datas){
    return null
  }

  
  return (
    <article className='box__card'>
        <div className='container__card'>
        {datas.map((value) => {
          return <Card id={value.id} title={value.title} cover={value.cover} key={value.id}/>
        })}
        </div>
    </article>
  )
}
