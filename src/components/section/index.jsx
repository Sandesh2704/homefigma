import React from 'react'

export default function Section({ children, color }) {
    return (
        <section className='px-4 md:px-7 lg:px-14 py-10 lg:py-12' style={{ backgroundColor: color }}>
            {children}
        </section>
    )
}