import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Navbar } from 'flowbite-react';
import React, { useEffect } from 'react';
import { Link, scroller } from 'react-scroll';

export type NavbarProps = {
  // Prop types go here
  setOpenModal?: (value: boolean) => void;
};

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    link: {
      base: 'block py-2 md:p-0 text-white',
      active: {
        on: 'text-white dark:text-white md:bg-transparent md:text-white',
        off: 'border-b border-gray-100  text-white hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-white hover:cursor-not-allowed dark:text-white',
        off: '',
      },
    },
  },
};

const NavbarGlobal: React.FC<NavbarProps> = () => {
  useEffect(() => {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, []);
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar
        className="px-4 lg:px-16"
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 40,
          top: 0,
          backgroundColor: '#FFF7F1',
        }}
      >
        <Navbar.Brand href="#">
          <img
            src="/logo.png"
            className="h-8 lg:mr-3 lg:h-16"
            alt="Docta Mobile Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Link
            activeClass="text-white font-bold border-b-2 border-text"
            to="home"
            smooth
            spy
            offset={-200}
            className="text-text"
          >
            Accueil
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-text"
            to="services"
            smooth
            spy
            className="text-text"
          >
            APS
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-text"
            to="illustrations"
            smooth
            spy
            className="text-text"
          >
            Illustrations
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-text"
            to="resources"
            smooth
            spy
            offset={-100}
            className="text-text"
          >
            Ressources
          </Link>
        </Navbar.Collapse>
        <Link
          activeClass="text-secondary-900 font-bold border-b-2 border-secondary-900"
          to="pricing"
          smooth
          spy
          offset={-100}
          className="rounded-lg bg-text px-8 py-2 text-sm font-semibold text-white"
        >
          Commencer
        </Link>
      </Navbar>
    </Flowbite>
  );
};

export { NavbarGlobal as Navbar };
