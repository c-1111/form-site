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
            className="fixed inset-0 backdrop-blur-sm bg-opacity-70 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-8 rounded-lg relative"
                onClick={e => e.stopPropagation()}
            >
                {/* BOTÓN CERRAR */}
                <button
                    className="absolute top-2 right-2 text-xl font-bold cursor-pointer"
                    onClick={onClose}
                >
                    X
                </button>
                <div className="flex">
                    <div className="img_holder relative max-w-[500px]">
                        <div className="project_image_overlay absolute inset-0 bg-[#5E5E5E] mix-blend-screen pointer-events-none"></div>
                        <img src={marca.imagen} alt={marca.titulo} className="mb-4 max-w-[500px]" /></div>
                    <div className="flex flex-col ml-4">
                        <h2 className="text-2xl font-bold mb-2">{marca.titulo}</h2>
                        <p>{marca.descripcion}</p>
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
