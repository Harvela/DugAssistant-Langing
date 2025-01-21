'use client';

import Link from 'next/link';
import React from 'react';

type BlogCardProps = {
  id: string;
  image: string;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  author,
  date,
  title,
  description,
  tags,
  link,
}) => {
  return (
    <div className="group relative h-[500px] overflow-hidden rounded-[5px] bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Image Section */}
      <div className="relative h-[45%] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Author and Date */}
        <div className="text-[14px] text-gray-500">
          <span className="font-semibold">{author}</span> • {date}
        </div>

        {/* Title with link */}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-[16px] font-bold text-gray-800 transition-colors duration-300 hover:text-back-100"
        >
          {title} <span className="inline-block">↗</span>
        </Link>

        {/* Description */}
        <p className="mt-3 text-[13px] text-gray-600">{description}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-200 px-3 py-1 text-[11px] text-gray-700 transition-colors duration-300 hover:bg-back-100 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
