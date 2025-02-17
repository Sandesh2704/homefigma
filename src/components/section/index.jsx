import React from 'react'

export default function Section({ children, color }) {
    return (
        <section className='' style={{ backgroundColor: color }}>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-0  py-10 lg:py-12'>
            {children}
            </div>
        </section>
    )
}