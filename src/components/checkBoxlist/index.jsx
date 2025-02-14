import React from 'react'

export default function CheckboxList({ title, items, selectedItems, toggleItem }) {
    return (
      <div className='flex flex-col gap-y-3'>
        <h3 className="text-xl lg:text-2xl font-semibold mb-2">{title}</h3>
        <div className='space-y-2'>
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => toggleItem(item)}
                className="w-4 lg:w-5 h-4 lg:h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className='text-base md:text-lg'>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };


