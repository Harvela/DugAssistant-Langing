'use client';

import { useState } from 'react';

export function Features() {
  const [selectedImage, setSelectedImage] = useState('');

  const handleButtonClick = (image: any) => {
    setSelectedImage(image);
  };

  return (
    <div
      id="feature"
      className="flex h-screen w-full flex-col gap-4 bg-primary-100 p-4  md:flex-row md:gap-20 md:p-16"
    >
      <div className="w-full md:w-[50%]">
        <h1 className="mb-8 text-[18px] font-semibold text-primary-400 md:mb-24 md:text-[32px]">
          Fonctionalites
        </h1>
        <div className="mb-4 flex flex-row gap-8 md:mb-16">
          <div className="h-3 w-6 bg-primary-500 md:h-5"></div>
          <div className="mt-[-4px]">
            <p className="text-[14px] font-semibold text-primary-400 md:text-[18px]">
              Des Fiches compatible avec l’Approche par competence et l’Approche
              par Situation
            </p>
            <button
              className="mt-2 text-[12px] font-semibold text-primary-500 md:mt-4 md:text-[14px]"
              onClick={() =>
                handleButtonClick('/assets/images/home/situation.png')
              }
            >
              Voir les exemples
            </button>
          </div>
        </div>

        <div className="mb-4 flex flex-row gap-8 md:mb-16">
          <div className="h-3 w-6 bg-primary-500 md:h-5"></div>
          <div className="mt-[-4px]">
            <p className="text-[14px] font-semibold text-primary-400 md:text-[18px]">
              Fiches utilisable au niveau Maternelle, Primaire, CTB et
              Secondaire pour plusieurs cours
            </p>
            <button
              className="mt-2 text-[12px] font-semibold text-primary-500 md:mt-4 md:text-[14px]"
              onClick={() =>
                handleButtonClick('/assets/images/home/niveau.png')
              }
            >
              Voir les exemples
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-8">
          <div className="h-3 w-6 bg-primary-500 md:h-5"></div>
          <div className="mt-[-4px]">
            <p className="text-[14px] font-semibold text-primary-400 md:text-[18px]">
              Des images d’illutstrations et des exemple de materiel didactique
              adaptes
            </p>
            <button
              className="mt-2 text-[12px] font-semibold text-primary-500 md:mt-4 md:text-[14px]"
              onClick={() =>
                handleButtonClick('/assets/images/home/illustration.png')
              }
            >
              Voir les exemples
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-[50%] rounded-2xl bg-primary-300/20 p-4 shadow-sm  shadow-black/20 md:h-[100%] md:w-[50%] md:p-8">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            className="h-[100%] w-full object-contain"
          />
        )}
      </div>
    </div>
  );
}
