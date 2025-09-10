'use client'

import { useState, useEffect } from 'react'
import Card from './components/Card'
import Overlay from './components/Overlay'
import Nav from './components/Nav'
import SplashScreen from './components/SplashScreen'
import marcasJson from './data/marcas.json'
import { Marca } from './lib/types'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Conctact'


export default function Home() {
  const [selectedMarca, setSelectedMarca] = useState<Marca | null>(null)

  useEffect(() => {
    marcasJson.forEach((marca: Marca) => {
      if (marca.color) {
        const img = new Image()
        img.src = marca.color
      }
    })
  }, [])

  function handleCardClick(marca: Marca) {
    setSelectedMarca(marca)
  }

  function handleCloseOverlay() {
    setSelectedMarca(null)
  }

  const marcas: Marca[] = marcasJson

  return (
    <main className="scroll-smooth bg-white overflow-x-hidden" id='top'>
      <SplashScreen />
      <div className=" flex w-full justify-center z-50"><Nav /></div>
      <div id='companies' className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-20 pt-20 px-12">
        {marcas.map(marca => (
          <Card key={marca.id} marca={marca} onClick={handleCardClick} />
        ))}
      </div>

      <div id='about' className='pt-24 mt-16'><About /></div>

      <div id='contact'> <Contact /></div>

      <Footer />

      <Overlay marca={selectedMarca} onClose={handleCloseOverlay} />
    </main>
  )
}
