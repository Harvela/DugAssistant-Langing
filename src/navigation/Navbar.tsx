'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: 'Accueil',
      link: '/home',
    },
    // {
    //   name: 'Fonctionalites',
    //   link: '/feature',
    // },
    {
      name: 'Tarifs',
      link: '/tarif',
    },
    {
      name: 'Gallerie',
      link: '/gallery',
    },
    {
      name: 'Contact',
      link: '/Contact',
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="z-10000 fixed mb-8 w-full border-b-[1px] border-primary-400/10 bg-white px-8 py-4 md:px-16 md:py-2">
      <div className="hidden flex-row items-center justify-between md:flex">
        <div className="flex flex-row items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          <p className="text-[24px] font-semibold text-primary-400">
            DugAssistant
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="text-[16px] font-medium text-primary-400"
            >
              {navItem.name}
            </Link>
          ))}
          <a
            href="https://app.dugassistant.com"
            target="_blank"
            className="relative rounded-md bg-primary-400 px-4 py-2 text-[1rem] font-medium text-white shadow-sm shadow-primary-400"
          >
            <span>Se connecter</span>
          </a>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex flex-row items-center justify-between">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <button onClick={toggleMenu} className="text-3xl text-primary-400">
            {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-20 flex h-[100vh] flex-col gap-20">
            <div className="flex flex-col gap-8">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  className="text-[18px] font-medium text-primary-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
            <a
              href="https://app.dugassistant.com"
              target="_blank"
              className="relative w-[60%] rounded-md bg-primary-400 px-4 py-2 text-center text-[16px] font-medium text-white shadow-sm shadow-primary-400"
              onClick={() => setMenuOpen(false)}
            >
              Se connecter
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
