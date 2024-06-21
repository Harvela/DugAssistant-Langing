import React from 'react';

import Counter from '@/components/counter';
import { books } from '@/utils/books';

const Conception = () => {
  const counterValues = [3, 121, 150];
  return (
    <div className="relative h-[900px] md:h-[100vh]" id="utilisation">
      <img
        src="/assets/images/home/background.jpg"
        alt=""
        className="absolute left-0 top-0 h-[900px] w-full object-cover transition-opacity duration-1000 md:h-[100vh]"
      />
      <div className="absolute left-0 top-0 h-full p-4 text-white md:p-16">
        <h1 className="mb-8 text-[24px] font-semibold md:text-[32px]">
          Conception et utilisation
        </h1>
        <p className="text-[12px] md:text-[16px]">
          Basee sur les recherches de Metre Bacibone Dug et plusieurs autres
          chercheur dans l’education ainsi que sur les materiels du ministere de
          l’education et des nombreux jours de recherches aupres de professeurs
          et enseignants.
        </p>
        <div className="mt-8 flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
          {books.map((b, index) => (
            <div
              key={index}
              className=" flex w-full flex-col items-center justify-center gap-2 rounded-[8px] border-2 border-white/50 p-4 text-center text-white md:w-[30%] md:rounded-[24px] md:p-8"
            >
              <p className="text-[12px] md:text-[16px]">{b.title}</p>
              <h2 className="text-[14px] font-semibold md:text-xl">
                {b.author}
              </h2>
              <button className="w-[30%] rounded-lg bg-white/80 py-1 text-[12px] font-bold text-black md:w-[40%] md:text-[14px]">
                Voir plus
              </button>
            </div>
          ))}
        </div>
        <hr className="m-auto mb-4 mt-8 h-[3px] w-[30%] bg-white md:mb-10 md:mt-16" />
        <Counter countervalue={counterValues} />
      </div>
    </div>
  );
};

export { Conception };
