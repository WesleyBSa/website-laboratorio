import React from 'react';
import { NavLinkProps } from '../types';

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
  return (
    <li className="my-2 md:my-0 md:mx-4">
      <a 
        href={href} 
        className="text-gray-800 hover:text-black-600 transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
          onClick();
        }}
      >
        {title}
      </a>
    </li>
  );
};

export default NavLink;