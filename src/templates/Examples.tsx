'use client';

import { InfiniteMovingLessons } from '@/components/scroll';
import { fiches } from '@/utils/fiches';

const Examples = () => {
  return (
    <div
      id="exemples"
      className="flex w-full flex-col gap-8 border-b-2 border-white/40 px-4 py-16 md:gap-16 md:px-32"
    >
      <h2 className="text-[18px] font-semibold text-back-100 dark:text-white md:text-[32px]">
        En seulement quelques étapes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="rounded-tl-[8px] border-b border-r border-dashed border-button bg-back-100/80 p-16 text-white dark:bg-button/10">
          <h2 className="mb-4 text-5xl font-bold">1</h2>
          <p className="text-lg">
            Indiquer les informations sur la leçon, le cours, le sujet et le
            texte.
          </p>
        </div>

        <div className="rounded-t-[8px] border-b border-r border-dashed border-button bg-button p-16 text-primary-400/80">
          <h2 className="mb-4 text-5xl font-bold">2</h2>
          <p className="text-lg">Choisir les images pour illustrer la leçon</p>
        </div>

        <div className="rounded-tr-[8px] border-b border-l border-dashed border-button bg-back-100/80 p-16 text-white dark:bg-button/10 ">
          <h2 className="mb-4 text-5xl font-bold">3</h2>
          <p className="text-lg">Télécharger votre fiche au format Word.</p>
        </div>
      </div>
      <h2 className="mb-0 text-[16px] font-semibold text-button dark:text-white md:text-[16px]">
        Recemment crées par nos utilisateurs
      </h2>
      <InfiniteMovingLessons items={fiches} speed="slow" />
    </div>
  );
};

export default Examples;
