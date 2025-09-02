'use client'

import { Marca } from '../lib/types'

type CardProps = {
    marca: Marca
    onClick: (marca: Marca) => void
}

export default function Card({ marca, onClick }: CardProps) {
    return (
        <div
            onClick={() => onClick(marca)}
            className="flex flex-col items-center w-full p-4 justify-center">
            <div className="card_holder relative w-full">
                {/* <div className="project_image_overlay absolute inset-0 bg-[#5E5E5E] mix-blend-screen pointer-events-none"></div> */}
                <img src={marca.imagen} alt={marca.titulo} className=" mb-8 px-12 hover:blur-sm cursor-pointer transition duration-75" />
            </div>
            {/* <div className="flex w-full justify-between items-baseline text-sm">
                <span>{marca.titulo}</span>
                <span>{marca.id}</span>
            </div> */}
        </div>
    )
}
