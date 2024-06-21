'use client';

import { IoIosQrScanner } from 'react-icons/io';

import Select from '@/components/select';

const Examples = () => {
  return (
    <div
      id="exemple"
      className="flex h-screen w-full flex-col gap-10 bg-primary-400 p-4  md:flex-row md:gap-20 md:p-16"
    >
      <div className="w-full md:w-[50%]">
        <h1 className="mb-10 text-[24px] font-semibold text-white md:mb-20 md:text-[32px]">
          Exemples
        </h1>
        <form className="flex flex-col gap-8 md:w-[70%] md:gap-16">
          <Select
            label="Selectionner le niveau"
            items={[]}
            onSelect={(item: any) => console.log(item)}
          />
          <Select
            label="Selectionner le cours"
            items={[]}
            onSelect={(item: any) => console.log(item)}
          />
          <button className="w-[40%] rounded-lg bg-white py-1 font-bold text-black md:w-[30%] md:py-3">
            Chercher
          </button>
        </form>
      </div>
      <div className="flex h-full w-full flex-col items-center gap-8 rounded-[24px] bg-primary-100 p-4 md:w-[50%] md:gap-20 md:p-16">
        <IoIosQrScanner className="text-[32px] text-black md:text-[100px]" />
        <div className="flex flex-col items-center gap-4 md:gap-12">
          <h2 className="text-center text-[16px] text-black md:text-[24px]">
            Le developement des puissances coloniaux pendant la deuxieme guerre
            mondiale
          </h2>
          <p className="rounded-lg bg-[#FFDCCD] px-8 py-2 font-bold text-black md:px-16 md:py-4">
            AGRICULTURE
          </p>
        </div>
      </div>
    </div>
  );
};

export { Examples };
