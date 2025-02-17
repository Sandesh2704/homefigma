"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsMenuApp, BsMenuButton } from 'react-icons/bs';


const menuItems = [
  { href: '/blogs', title: 'blogs' },
  { href: '/about', title: 'about' },
  { href: '/contact', title: 'contact' },
  { href: '/classlisting', title: 'Class Listing' },
  { href: '/signupdetailsfrom', title: 'Sign Updetails from ' },
  { href: '/teachersignup', title: 'Teacher signup' },
  { href: '/tutorslisting', title: 'Tutors Listing' }
];

export default function NavbarPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button onClick={toggleMenu} className="p-4 bg-blue-600 text-white rounded-full shadow-lg">
        <span className='text-2xl'>  <BsMenuButton/>   </span>
  
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 right-0 border  bg-white shadow-lg rounded-lg p-4 w-48"
        >
          <ul className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
