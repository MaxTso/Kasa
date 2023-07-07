import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logement from '../../data/logements.json';
import Failed from '../Failed/Failed';
import Carroussel from './carroussel/carroussel';
import './styles/Loc.scss'
import Deployer from '../deployer/deployer.js';
import RateandOwner from './Rate_and_owner/RateAndOwner';
import PresentationandTag from './presentation_and_tag/PresentationandTag';

export default function Loc() {
  const [status, setStatus] = useState();
  const [data, setData] = useState();
  const {id} = useParams();
  

  
  useEffect(() => {
    let datas = logement.filter(e => e.id === id);
    setStatus(datas.length === 1 ? true : false)
    setData(datas[0])
  },[id])

  if (status === false) {
    return <Failed />
  } else {
    if (data !== undefined){
    return (
      <div className='container'>
        <Carroussel images={data.pictures}/>
        <div className='container__presentation'>
          <PresentationandTag title={data.title} location={data.location} tag={data.tags}/>
          <RateandOwner ownername={data.host.name} rate={data.rating} ownerimg={data.host.picture} />
        </div>
        <div className='container__deployer'>
          <Deployer title='Description' text={data.description} k='description' key='desc'/>
          <Deployer title='Équipements' text={data.equipments.map((e,i) => <span key={i}>{e}<br /></span>)} k='equipement' key={data.equipments[0]}/>
        </div>
      </div>
    )
  }}
}