'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    {
      name: 'Accueil',
      link: '#home',
    },
    {
      name: 'Tarifs',
      link: '#pricing',
    },
    {
      name: 'Blog',
      link: '#blog',
    },
    { name: 'Contact', link: '#contact' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setTheme(storedTheme || (prefersDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    // Apply the theme class to the HTML element
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme); // Persist theme in localStorage
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="z-10000 fixed mb-8 w-full border-b-2 border-back-100/10 bg-white p-4 dark:border-white/20 dark:bg-back-100 md:px-32 md:py-2.5">
      <div className="hidden flex-row items-center justify-between md:flex">
        <div className="flex flex-row items-center gap-2">
          <img
            src="/logo192.png"
            alt="logo1"
            className="h-8 w-auto rounded-[8px] text-white"
          />
          <p className="text-[18px] font-semibold text-back-100 dark:text-white">
            DugAssistant
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-3">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={`rounded-[5px] px-3 py-1 text-[14px] font-medium text-back-100 transition duration-300 dark:text-white ${
                router.pathname === navItem.link
                  ? 'bg-black bg-opacity-10'
                  : 'hover:bg-black hover:bg-opacity-10'
              }`}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        <div className="item-center flex flex-row gap-4">
          <a
            href="https://app.dugassistant.com"
            target="_blank"
            className="relative rounded-md border-2 border-back-100 px-6 py-2 text-[13px] font-medium text-back-100 shadow-sm shadow-primary-400 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-black hover:text-primary-500 dark:border-white dark:bg-back-100/10 dark:text-white dark:hover:border-transparent"
          >
            <span>Se connecter</span>
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? (
              <BsMoonStarsFill className="size-6 text-back-100" />
            ) : (
              <BsSun className="size-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="flex flex-row items-center justify-between">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <div className="flex flex-row items-center gap-4">
            <button onClick={toggleMenu} className="text-3xl text-primary-400">
              {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
            </button>
            <button onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? (
                <BsMoonStarsFill className="size-6 text-back-100" />
              ) : (
                <BsSun className="size-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-20 flex h-screen flex-col gap-20">
            <div className="flex flex-col gap-8">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  className={`text-[18px] font-medium text-primary-400 ${
                    router.pathname === navItem.link
                      ? 'bg-black bg-opacity-10'
                      : 'hover:bg-black hover:bg-opacity-10'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
            <a
              href="https://app.dugassistant.com"
              target="_blank"
              className="relative w-3/5 rounded-md bg-primary-400 p-4 text-center text-[16px] font-medium text-white shadow-sm shadow-primary-400"
              onClick={() => setMenuOpen(false)}
            >
              Se connecter
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
