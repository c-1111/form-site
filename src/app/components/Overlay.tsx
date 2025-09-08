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
            className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-30 bg-white/50"
            onClick={onClose}
        >
            <div
                className="rounded-lg relative w-full h-[40vh] max-w-5xl px-6 sm:px-12 md:px-20 lg:px-40 py-8"
                onClick={e => e.stopPropagation()}
            >
                {/* BOTÓN CERRAR */}
                <button
                    className="absolute top-[-100px] right-4 md:right-[-200px] cursor-pointer"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 65 65"
                    >
                        <path
                            fill="#5E5E5E"
                            d="M59.106 65 32.521 38.39 5.936 65 0 59.068 26.627 32.5 0 5.932 5.936 0 32.52 26.61 59.106.042 65 5.932 38.415 32.5 65 59.068 59.106 65Z"
                        />
                    </svg>
                </button>

                {/* Contenido */}
                <div className="flex flex-col md:ml-[-300px] md:flex-row w-full gap-6 md:gap-12">
                    {/* Imagen */}
                    <div className="img_holder relative md:max-w-[500px]">
                        <img
                            src={marca.color ? marca.color : marca.imagen}
                            alt={marca.titulo}
                            className="mb-4 max-w-full md:max-w-[500px] h-auto"
                        />
                    </div>

                    {/* Texto */}
                    <div className="flex flex-col md:ml-4 mt-4 md:mt-0 md:text-left">
                        <p className="md:text-3xl md:w-[40ch] font-semibold">
                            {marca.descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
