import { Carousel } from 'flowbite-react';
import React from 'react';

const Illustrations = () => {
  return (
    <div
      className="mt-10 flex w-full flex-col bg-[#F0FFFD] px-4 py-8 md:px-16"
      id="illustrations"
    >
      <div className="flex w-full flex-col items-center justify-center pb-8  md:items-start md:justify-start">
        <h1 className="text-center text-[1.4rem] font-semibold text-text ">
          Exemples{' '}
        </h1>
        <div className="mt-4 h-[2px] w-[60px] self-center bg-text md:self-start"></div>
      </div>

      <div className="flex h-[450px] w-full md:h-[300px]">
        <Carousel
          slideInterval={5000}
          theme={{
            indicators: {
              active: {
                off: 'bg-[#202827]/50 hover:bg-[#202827] dark:bg-white-800/50 dark:hover:bg-white-800',
                on: 'bg-[#202827] dark:bg-white-800',
              },
            },
            control: {
              base: 'hidden inline-flex h-8 w-8 items-center justify-center rounded-full  bg-[#202827]/30 group-hover:bg-[#202827]/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-white-800/30 dark:group-hover:bg-white-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
            },
            item: {
              base: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
              wrapper: {
                off: 'w-full flex-shrink-0 transform cursor-default snap-center mt-[-70px]',
                on: 'w-full flex-shrink-0 transform cursor-grab snap-center mt-[-70px]',
              },
            },
          }}
        >
          <div className="flex w-full flex-col gap-4 rounded-2xl bg-[#202827]/10 p-8 text-text">
            <div className="flex flex-row items-center gap-4 rounded-2xl">
              <p className="rounded-lg bg-[#FF6076]/10 px-4 py-1 text-center">
                Cours: Math
              </p>
              <p className="rounded-lg bg-[#FFE4CA] px-4 py-1 text-center">
                Domaine : Agriculture
              </p>
            </div>
            <p className="text-md font-semibold">Situation sur les Egouts</p>
            <p className="mb-4 text-sm">
              Situation sur les Egouts les egout sont les egout et seront
              toutjous lesegout sans beacoup d egoSituation sur les Egouts les
              egout sont les egout et seront toutjous lesegout sans beacoup d
              egout la vie sur terre serait impossibleut la vie sur terre serait
              impossible
            </p>
          </div>

          <div className=" flex w-full flex-col gap-4 rounded-2xl bg-[#202827]/10 p-8 text-text">
            <div className="flex flex-row items-center gap-4 rounded-2xl">
              <p className="rounded-lg bg-[#FF6076]/10 px-4 py-1 text-center">
                Math
              </p>
              <p className="rounded-lg bg-[#FFE4CA] px-4 py-1 text-center">
                Agriculture
              </p>
            </div>
            <p className="text-md font-semibold">Situation sur les Egouts</p>
            <p className="mb-4 text-sm">
              Situation sur les Egouts les egout sont les egout et seront
              toutjous lesegout sans beacoup d egoSituation sur les Egouts les
              egout sont les egout et seront toutjous lesegout sans beacoup d
              egout la vie sur terre serait impossibleut la vie sur terre serait
              impossible
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export { Illustrations };
