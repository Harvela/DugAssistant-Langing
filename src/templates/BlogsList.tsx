'use client';

import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import BlogCard from '@/components/BlogCard';
import { blogs } from '@/utils/blogs';

const BlogList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [blogsPerPage, setBlogsPerPage] = useState(1); // Par défaut, 1 carte par page

  // Fonction pour ajuster le nombre de blogs par page selon la largeur de l'écran
  const updateBlogsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1536) {
      // '2xl' breakpoint
      setBlogsPerPage(4);
    } else if (width >= 768) {
      // 'md' breakpoint
      setBlogsPerPage(3);
    } else {
      setBlogsPerPage(1);
    }
  };

  useEffect(() => {
    updateBlogsPerPage(); // Initialisation
    window.addEventListener('resize', updateBlogsPerPage); // Mise à jour lors du redimensionnement

    return () => {
      window.removeEventListener('resize', updateBlogsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const displayedBlogs = blogs.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage,
  );

  const goToPrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <div id="blog" className="mx-auto px-4 py-16 md:px-32">
      <div className="mb-6">
        <h1 className="text-[24px] font-bold text-back-100 dark:text-white md:text-[32px]">
          Nos Articles
        </h1>
        <p className="mt-4 text-[13px] font-light text-black/70 dark:text-white/80 md:text-[16px]">
          Découvrez des conseils pratiques et les dernières actualités pour
          transformer votre expérience d&apos;enseignement avec DugAssistant.
        </p>
      </div>
      {/* Grille responsive */}
      <div
        className={`mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 2xl:grid-cols-4 2xl:gap-12`}
      >
        {displayedBlogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 0}
          className={`flex items-center gap-2 rounded bg-gray-200 px-4 py-2 text-sm font-semibold hover:bg-back-100 hover:text-white ${
            currentPage === 0 && 'cursor-not-allowed opacity-50'
          }`}
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center gap-2 rounded bg-gray-200 px-4 py-2 text-sm font-semibold hover:bg-back-100 hover:text-white ${
            currentPage === totalPages - 1 && 'cursor-not-allowed opacity-50'
          }`}
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogList;
