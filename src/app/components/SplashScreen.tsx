'use client';

import { useState, useEffect } from 'react';

export default function SplashScreen() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Detecta scroll para iniciar animación
    useEffect(() => {
        function handleScroll() {
            if (!isAnimating) setIsAnimating(true);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isAnimating]);

    // Ocultar splash al finalizar la animación
    const handleTransitionEnd = () => {
        if (isAnimating) setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            onClick={() => setIsAnimating(true)}
            onTransitionEnd={handleTransitionEnd}
            className={`
        fixed inset-0 z-50 flex items-center justify-center bg-black
        transform transition-all duration-700 ease-in-out
        ${isAnimating ? '-translate-y-full' : 'translate-y-0'}
      `}
        >
            <img
                src="/Splash.png"
                alt="Logo"
                className="w-56 h-auto"
            />
        </div>
    );
}
