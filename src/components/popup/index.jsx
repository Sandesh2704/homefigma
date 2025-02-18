"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsMenuApp, BsMenuButton } from 'react-icons/bs';
import { RiMenuFill } from "react-icons/ri";

const menuItems = [
  
  { href: '/blogs', title: 'blogs',  status : true },
  { href: '/about', title: 'about',  status : true },
  { href: '/contact', title: 'contact',  status : true },
  { href: '/classlisting', title: 'Class Listing',  status : true },
  { href: '/teacherdetailsfrom', title: 'Teacher details from (in working)',  status : true },
  { href: '/studentenorllfrom', title: 'student enroll details from (in working)', status : true },
  { href: '/teachersignup', title: 'Teacher signup', status : true },
  { href: '/tutorslisting', title: 'Tutors Listing', status : true }
];

export default function NavbarPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button onClick={toggleMenu} className="p-4 bg-blue-600 text-white rounded-full shadow">
        <span className='text-2xl'>  <RiMenuFill/>   </span>
  
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
