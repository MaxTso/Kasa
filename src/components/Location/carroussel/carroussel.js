import React, { useReducer } from 'react'
import arrowLeft from '../../assets/arrow_left.png'
import arrowRight from '../../assets/arrow_right.png'
import './styles/caroussel.scss'

function reducer(state, action) {
    switch (action.type){
        case 'next':
            if (state.actualCountImg === state.imgLength){
                let [addValueCount, addValueTable] = [1, 0]
                return {...state, 
                    actualCountImg : addValueCount,
                    actualTableImg : addValueTable}
            }
            let [addValueCount, addValueTable] =  [state.actualCountImg + 1 , state.actualTableImg + 1]
            return {...state, 
                actualCountImg : addValueCount,
                actualTableImg : addValueTable}
                
        case 'previous':
            if (state.actualCountImg === 1){
                let [newValueCount, newValueTable] = [state.imgLength, state.imgLength - 1]
                return {...state, 
                    actualCountImg : newValueCount,
                    actualTableImg : newValueTable}
            }
            let [rmvValueCount, rmvValueTable] =  [state.actualCountImg - 1 , state.actualTableImg - 1]
            return {...state, 
                actualCountImg : rmvValueCount,
                actualTableImg : rmvValueTable}
        default:
            return state
    }
}


export default function Carroussel({images}) {
    const [state, dispatch] = useReducer(reducer, {
        imgLength : images.length,
        actualTableImg : 0,
        actualCountImg : 1
    })


  return (
    <div className='carroussel'>
        <img src={arrowLeft} alt='arrow change carroussel' className='arrow left' onClick={() => dispatch({type:'previous'})}/>
        <img src={arrowRight} alt='arrow change carroussel' className='arrow right' onClick={() => dispatch({type:'next'})}/>
        <p>{state.actualCountImg}/{state.imgLength}</p>
        <img src={images[state.actualTableImg]} alt='Appartement' className='carroussel__img'/>
    </div>
  )
}
