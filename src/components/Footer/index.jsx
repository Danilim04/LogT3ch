import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between h-52 p-4 md:flex-row">
      <div className="flex items-center space-x-4">
        {/* Logo ou ícone aqui */}
        <img src="/image/LogoTransptech.png" alt="Logo" className="h-20" />
      </div>
      
      <div className="my-4 border-b w-full md:my-0 md:border-b-0 md:w-auto"></div>

      <div className="flex items-center justify-center space-x-4 text-center">
        <span className="text-sm">&copy; 2023 Relume. All rights reserved.</span>
        <a href="/cookies-settings" className="text-sm hover:underline">
          Cookies Settings
        </a>
      </div>

      <div className="flex items-center space-x-4">
        {/* Links das redes sociais */}
        <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
          <FaLinkedinIn />
        </a>
        <a href="https://youtube.com" className="text-gray-600 hover:text-gray-900">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
