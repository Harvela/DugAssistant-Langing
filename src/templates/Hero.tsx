'use client';

import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from 'flowbite-react';
import React from 'react';

import { SparklesCore } from '../components/sparkles';

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="relative flex h-screen w-full flex-col items-center justify-center bg-primary-400 px-4"
    >
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="size-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Navbar />
      <div className="flex max-w-[1500px] flex-col items-center justify-center">
        <span className="text-md relative z-20 mb-4 text-center text-white/80 md:text-xl lg:text-xl">
          Dug Assistant - Ed TECH
        </span>
        <h1 className="relative z-20 mb-24 text-center text-xl font-bold text-white md:text-5xl lg:text-5xl">
          Faites vos fiches de preparation dans
          <span className="mx-2 text-[#F8AB5D]">moins de 5 minutes</span>
          avec l’intelligence artificielle.
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
          <button className="z-[10000] w-full rounded-xl bg-white p-3 text-primary-400 md:mx-4 md:w-[20%]">
            Generer les fiches
          </button>
          <button className="z-[10000] w-full rounded-xl border-2 border-white p-3 text-white md:mx-4 md:w-[20%]">
            Voir les exemples
          </button>
        </div>
      </div>
    </div>
  );
};

export { Hero };
