import React from 'react'
import Boxtitle from '../Imagebox/boxtitle'
import Deployer from '../deployer/deployer'
import about from "../../data/about.json"
import './styles/about.scss'


export default function About() {
  return (
    <div>
      <Boxtitle />
      {about.map((value, key)=> {
        return <Deployer title={value.title} text={value.text} k={key} key={key}/>
      })}
    </div>
  )
}

