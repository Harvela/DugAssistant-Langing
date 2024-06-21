'use client';

import Link from 'next/link';
import React from 'react';

import { cn } from '@/utils/cn';

export function Navbar() {
  const navItems = [
    {
      name: 'Accueil',
      link: '#home',
    },
    {
      name: 'Fonctionalites',
      link: '#feature',
    },
    {
      name: 'Utilisation',
      link: '#utilisation',
    },
    {
      name: 'Exemples',
      link: '#exemple',
    },
    {
      name: 'Tarifs',
      link: '#pricing',
    },
    {
      name: 'Gallerie',
      link: '#gallery',
    },
    // {
    //   name: 'Contact',
    //   link: '#contact',
    // },
  ];
  return (
    <div className="relative w-full">
      <div
        className={cn(
          'flex  w-[95%]  md:max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 md:pl-8 py-2  items-center justify-center space-x-4',
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative dark:text-neutral-50  items-center flex space-x-1 text-black dark:hover:text-neutral-300 hover:text-neutral-500',
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-[12px] md:text-sm">{navItem.name}</span>
          </Link>
        ))}
        <a
          href="https://app.dugassistant.com"
          target="_blank"
          className="relative rounded-full border border-primary-200 px-2 py-1 text-[11px] font-medium text-black shadow-md dark:border-white/[0.2] dark:text-white md:text-sm"
        >
          <span>Se connecter</span>
        </a>
      </div>
    </div>
  );
}
