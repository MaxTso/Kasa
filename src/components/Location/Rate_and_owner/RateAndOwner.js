import React, {useEffect, useState} from 'react'
import './styles/RateAndOwner.scss'
import Rate from './rate/rate'

export default function RateandOwner({ownername, rate, ownerimg}) {
    const [ratingStars, setRating] = useState([])
    

    useEffect(()=> {
        let newRate = [];
        for (let i = 1; i <= 5; i++){
          newRate.push(i<= rate ? 'on' : 'off')
        }
        setRating(ratingStars => [...ratingStars, newRate])
      }, [rate])
      
  return (
    <div className='tagandrate__container'>
        <div className='rate__container'>
            {ratingStars.length > 0 && ratingStars[0].map((e, i) => {
                return <Rate rate={e.toString()} key={i}/>
            })}
        </div>
        <div className='owner'>
            <div className='owner__name'> 
                <p>{ownername.split(' ')[0]}</p>
                <p>{ownername.split(' ')[1]}</p>
            </div>
            <img src={ownerimg} alt='owner profil' className='ownerimg'></img>
        </div>
    </div>
  )
}

