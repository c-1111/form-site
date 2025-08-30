'use client'

import { Marca } from '../lib/types'
type OverlayProps = {
    marca: Marca | null
    onClose: () => void
}

export default function Overlay({ marca, onClose }: OverlayProps) {
    if (!marca) return null

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-30"
            onClick={onClose}
        >
            <div
                className="rounded-lg relative w-full px-40"
                onClick={e => e.stopPropagation()}
            >
                {/* BOTÓN CERRAR */}
                <button
                    className="absolute top-[-200] right-40 cursor-pointer"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 65 65">
                        <path fill="#5E5E5E" d="M59.106 65 32.521 38.39 5.936 65 0 59.068 26.627 32.5 0 5.932 5.936 0 32.52 26.61 59.106.042 65 5.932 38.415 32.5 65 59.068 59.106 65Z" />
                    </svg>

                </button>
                <div className="flex justify-between w-full gap-12">
                    <div className="img_holder relative max-w-[500px]">
                        <img src={marca.imagen} alt={marca.titulo} className="mb-4 max-w-[500px]" /></div>
                    <div className="flex flex-col ml-4">
                        {/* <h2 className="text-2xl font-bold mb-2">{marca.titulo}</h2> */}
                        <p className='texto-marca max-w-[60ch]'>{marca.descripcion}</p>
                    </div>
                </div>

                {/* {marca.imagenesExtras.length > 0 && (
                    <div className="mt-4 flex gap-2 overflow-x-auto">
                        {marca.imagenesExtras.map((img, idx) => (
                            <img key={idx} src={img} alt={`${marca.titulo} extra ${idx}`} className="w-24 h-24 object-cover rounded" />
                        ))}
                    </div>
                )} */}
            </div>
        </div>
    )
}
