import React, {useRef, useState } from 'react'
import './styles/deployer.scss'
import arrow from '../assets/arrow.png'

export default function Deployer({title, text, k}) {
   const [status, setStatus] = useState()
    const textcontent = useRef(null);

    function deploy(e) {
      setStatus((status) => !status)
    }

  return (
    <section className= {`deployer ${window.location.pathname.split('/')[1].toString()}`} key={k + "deployer"}>
        <div className={!status ? 'deployer__controller__up rotate' : 'deployer__controller__down rotate'} key={k + "dc"}>
            <h2 key={k + "h2"}>{title}</h2>
            <img src={arrow} className='arrow' alt='arrow controller' onClick={deploy} key={k + "img"}/>
        </div>
        <div className={!status ? 'deployer__textcontent off' : 'deployer__textcontent on'} ref={textcontent} key={k + "textcontent"}>
            <p key={k + "p"}>
              {text}
            </p>
        </div>
    </section>
  )
}
