import React from 'react'

export default function Paragraph({ text, black, balance, fontlarg }) {
  return (
    <div className={`
       ${black ? 'text-gray-400' : " text-tertiary"}
        ${balance ? 'text-balance' : ""}
        ${fontlarg ? 'text-base md:text-[18px] leading-[1.8rem] ' : "text-base "}`}
    >{text}</div>
  )
}

