import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
// import Here from './components/Here'
import Hero from './components/Hero'
import Body from './components/Body/body'
import Category from './components/Body/category'
import SingleCards from './components/SingleCards/SingleCards'
import Contact from './components/Contact'
import { Footer } from 'flowbite-react'
import Footers from './components/Footer'
import { Outlet, useLoaderData } from 'react-router-dom'
// import Hero from '../components/Hero';

function App() {

  return (
    <>
  <Hero></Hero>
    <Body></Body>
    <SingleCards></SingleCards>
    <Contact></Contact>
  <Footers></Footers>
    </>
  )
}

export default App
