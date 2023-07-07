import React from 'react'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import About from './components/about/About.js'
import Failed from './components/Failed/Failed.js'
import Loc from './components/Location/Loc'
import Home, { navlist } from './components/home/home'
import Header from './components/Header/Header'
import Foot from './components/Footer/Foot'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<BrowserRouter>
	<React.StrictMode>
		<Header navlist={navlist}/>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About/>}/>
			<Route path='/logement/:id' element={<Loc />}/>
			<Route path='/*' element={<Failed />}/>
		</Routes>
		<Foot />
	</React.StrictMode>
</BrowserRouter>
)
