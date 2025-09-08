'use client'

import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        mensaje: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (field: string, value: string) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("");

        // Simular envío
        setTimeout(() => {
            setStatus("Gracias por tu mensaje!");
            setForm({ nombre: '', apellidos: '', email: '', mensaje: '' });

            // Opcional: ocultar mensaje después de 3s
            setTimeout(() => setStatus(''), 3000);
        }, 500);
    };

    return (
        <div className="md:px-12 px-4 md:pb-60 pb-20 pt-24 md:pt-0">
            <div className="font-sans text-3xl font-semibold pb-12 md:pt-0">Contacto</div>
            <form onSubmit={handleSubmit} className="form flex md:flex-row flex-col md:gap-20 gap-8 md:mt-12">
                <div className="flex flex-col gap-4 w-64">
                    <div className="flex flex-col text-sm text-[#BFBFBF]">
                        Nombre
                        <input
                            className="my-4 border-b text-xl text-[#5E5E5E]"
                            type="text"
                            value={form.nombre}
                            onChange={(e) => handleChange('nombre', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col text-sm text-[#BFBFBF]">
                        Apellidos
                        <input
                            className="my-4 border-b text-xl text-[#5E5E5E]"
                            type="text"
                            value={form.apellidos}
                            onChange={(e) => handleChange('apellidos', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col text-sm text-[#BFBFBF]">
                        Email
                        <input
                            className="my-4 border-b text-xl text-[#5E5E5E]"
                            type="text"
                            value={form.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:items-end h-full justify-between">
                    <div className="flex flex-col md:w-[800px] text-[#BFBFBF]">
                        Mensaje
                        <textarea
                            className="my-4 border-b text-[#5E5E5E] h-6 resize-none"
                            value={form.mensaje}
                            onChange={(e) => handleChange('mensaje', e.target.value)}
                        />
                    </div>

                    <div className="md:mt-32 mt-12">
                        {status ? (
                            <p className="font-medium text-4xl">{status}</p>
                        ) : (
                            <button
                                type="submit"
                                className="w-fit px-12 py-2 rounded-md cursor-pointer text-white transition duration-600 hover:bg-[#5E5E5E] bg-[#BFBFBF]"
                            >
                                Enviar
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
