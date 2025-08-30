'use client'

import { useState } from 'react'
import Card from './components/Card'
import Overlay from './components/Overlay'
import Nav from './components/Nav'
import SplashScreen from './components/SplashScreen'
import marcasJson from './data/marcas.json'
import { Marca } from './lib/types'


export default function Home() {
  const [selectedMarca, setSelectedMarca] = useState<Marca | null>(null)

  function handleCardClick(marca: Marca) {
    setSelectedMarca(marca)
  }

  function handleCloseOverlay() {
    setSelectedMarca(null)
  }

  const marcas: Marca[] = marcasJson

  return (
    <main className="">
      <SplashScreen />
      <div className=" flex w-full justify-center"><Nav />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-20 pt-20 px-12 pb-40">
        {marcas.map(marca => (
          <Card key={marca.id} marca={marca} onClick={handleCardClick} />
        ))}
      </div>

      <Overlay marca={selectedMarca} onClose={handleCloseOverlay} />
    </main>
  )
}
