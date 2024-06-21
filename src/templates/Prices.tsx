'use client';

import { Checkbox } from 'flowbite-react';

import Input from '@/components/input';

export function Pricing() {
  return (
    <div
      id="pricing"
      className="flex h-screen w-full flex-col gap-8 bg-white p-4  md:flex-row md:gap-20 md:p-16"
    >
      <div className="w-full md:w-[50%]">
        <h1 className="mb-8 text-[24px] font-semibold text-primary-400 md:mb-20 md:text-[32px]">
          Tarifs
        </h1>
        <form className="flex w-full flex-col gap-4 md:w-[70%] md:gap-16">
          <Input
            label="Quel est votre budget?"
            placeholder={''}
            name={''}
            style="rounded-[24px]"
            bgColor="mt-4 h-[40px] w-full rounded-[24px] border border-primary-400/40"
          />
          <div className={`flex-1 sm:mb-5`}>
            <span className="mb-6 flex flex-row items-center gap-1 text-[16px] font-semibold text-primary-400/90">
              Dug Assitant est partenaire avec mon ecole
            </span>
            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-row items-center gap-4">
                <Checkbox className="h-6 w-6 border border-primary-400/90 bg-white" />
                <span className="text-[18px] font-semibold text-primary-400/90">
                  Oui
                </span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Checkbox className="h-6 w-6 border border-primary-400/90 bg-white" />
                <span className="text-[18px] font-semibold text-primary-400/90">
                  Non
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-[24px] bg-primary-400 p-8 md:h-full md:w-[50%] md:gap-16 md:p-16">
        <div className="flex flex-col items-center text-white">
          <h2 className="text-center text-[58px] font-bold md:text-[120px]">
            102
          </h2>
          <p className=" text-center text-[16px] md:text-[32px]">
            Fiches d’exploitations de matrices
          </p>
        </div>
        <button className="w-[60%] rounded-lg bg-white py-2 font-bold text-black md:w-[50%] md:py-3">
          Acheter
        </button>
      </div>
    </div>
  );
}
