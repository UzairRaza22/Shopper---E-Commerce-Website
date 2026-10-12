import React from 'react'
import footer_logo from './assets/logo_big.png'
import instagram_icon from './assets/instagram_icon.png'
import pintester_icon from './assets/pintester_icon.png'
import whatsapp_icon from './assets/whatsapp_icon.png'
import instagramDark_icon from './assets/Instagram2.jpg'
import pintesterDark_icon from './assets/pinterestdark.jpg'
import whatsappDark_icon from './assets/whatsapp1.jpg'

const Footer = () => {
  const socialIcons = [
    { light: instagram_icon, dark: instagramDark_icon },
    { light: pintester_icon, dark: pintesterDark_icon },
    { light: whatsapp_icon, dark: whatsappDark_icon }
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-16 px-4 md:px-8 lg:px-16 py-12 bg-white dark:bg-black">
      <div className="flex items-center gap-6">
        <img src={footer_logo} alt="logo" className="h-16 w-auto" />
        <p className="text-[#383838] dark:text-gray-300 text-5xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex flex-wrap justify-center list-none gap-8 sm:gap-12 text-[#252525] dark:text-gray-300 text-lg sm:text-xl">
        <li className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-400">Company</li>
        <li className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-400">Products</li>
        <li className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-400">Offices</li>
        <li className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-400">About</li>
        <li className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-400">Contact</li>
      </ul>
      <div className="flex gap-6">
        {socialIcons.map((icon, i) => (
          <div
            key={i}
            className="p-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-900 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"
          >
            <img src={icon.light} alt={`social-light-${i}`} className="w-6 h-6 cursor-pointer dark:hidden" />
            <img src={icon.dark} alt={`social-dark-${i}`} className="w-6 h-6 cursor-pointer hidden dark:block" />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 w-full mt-8 text-[#1a1a1a] dark:text-white text-lg sm:text-xl">
        <hr className="w-4/5 border-none rounded-xl h-[2px] bg-[#c7c7c7]" />
        <p className="text-center px-4">Copyright © 2025 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
