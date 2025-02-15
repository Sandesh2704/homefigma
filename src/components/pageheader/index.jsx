import React from 'react'

export default function PageHeader({title}) {
    return (
        <div>
            <div className="relative w-full h-60 flex items-center justify-center bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: "url('/assests/header/header.jpg')" }}
                ></div>
                <h1 className="relative text-white text-4xl lg:text-5xl font-medium">{title}</h1>
            </div>
        </div>
    )
}