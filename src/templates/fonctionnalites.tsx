'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { StickyScroll } from '@/components/sticky-card-reveal';

const content = [
  {
    title: 'Approche par Situation et par Compétence',
    description:
      "Obtenez des fiches conçues avec l'approche par situation et par compétence, utilisant des scénarios réels où les enseignants amènent les élèves à développer des compétences essentielles et à appliquer leurs connaissances de manière concrète, préparant ainsi chaque apprenant à relever les défis de la vie quotidienne et professionnelle.",
    content: (
      <img
        src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1722414027/dugassistant/kt0ne4aoejarst1z9hmt.png"
        alt=""
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Des histoires et exemples captivants',
    description:
      'Obtenez des histoires et des exemples basés sur les réalités de vos élèves, de leurs filières ou de leurs domaines. Ces inspirations instantanées vous permettront de vous concentrer davantage sur le suivi de vos élèves et de rendre vos cours plus intéressants.',
    content: (
      <img
        src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1722414014/dugassistant/xvnc3dsscv5imge7qdau.png"
        alt=""
        className="h-full w-full object-center"
      />
    ),
  },
  {
    title: 'Des Illustrations Visuelles pour Vos Leçons',
    description:
      "Enrichissez vos leçons avec nos illustrations visuelles captivantes. Ces ressources visuelles sont conçues pour faciliter la compréhension des concepts complexes et rendre l'apprentissage plus stimulant et engageant pour les élèves. Nos illustrations visuelles permettent une meilleure rétention des informations et aident à rendre vos cours plus dynamiques et interactifs.",
    content: (
      <img
        src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1722414013/dugassistant/l5novctqdzrsrcsm0lug.png"
        alt=""
        className="h-full w-full object-center"
      />
    ),
  },
  {
    title: 'Des Fiches au Format DOCX Éditable',
    description:
      "Obtenez des fiches au format DOCX éditable pour une flexibilité maximale dans la personnalisation de vos ressources pédagogiques. Ces fiches vous permettent de facilement modifier le contenu selon vos besoins spécifiques, facilitant ainsi la création de supports d'apprentissage adaptés à votre enseignement.",
    content: (
      <img
        src="https://res.cloudinary.com/dzj9hndxv/image/upload/v1722414027/dugassistant/dej2nxcmif8pc1sw0vak.png"
        alt=""
        className="h-full w-full object-cover"
      />
    ),
  },
];
export function Fonctionnalites() {
  return (
    <div>
      <motion.div
        onViewportEnter={() => console.log('enter')}
        className="flex flex-col gap-4"
      >
        <StickyScroll content={content} />
      </motion.div>
    </div>
  );
}
