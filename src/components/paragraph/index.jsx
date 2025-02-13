import React from 'react'

export default function Paragraph({ text, black, balance, fontlarg }) {
  return (
    <div className={`
       ${black ? 'text-gray-400' : "text-gray-600"}
        ${balance ? 'text-balance' : ""}
        ${fontlarg ? 'text-base md:text-lg' : "text-base md:text-base  "}`}
    >{text}</div>
  )
}

