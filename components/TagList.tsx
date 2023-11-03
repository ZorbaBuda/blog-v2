'use client'
import { useState } from 'react';
import { Tag } from './Tag';

export function TagList({ tag, tags }) {

  const [isCategoriesVisible, setCategoriesVisible] = useState(true);
  return (
<div>
    <h1>
        <span className="flex justify-center underline text-xl font-semibold tracking-wide  text-indigo-500  dark:text-teal-400">
          Categories
        </span>
      </h1>
    <div className="mb-10 bg-slate-700 py-5">
     
     
      <div className="border border-spacing-2 flex flex-wrap w-full gap-2  justify-center ">
        {/* Initial tag for all topics */}
        <div className=" rounded  ">
          <Tag activeTag={tag} tag="" />
        </div>
        {tags &&
          tags.map((tagItem, index) => (
            
              <Tag key={index} activeTag={tag} tag={tagItem} />
            
          ))}
      </div>

      {/* gradient fades */}
      <div className="absolute w-12 h-16 top-[50px] left-0 bg-gradient-to-r from-white dark:from-dark"></div>
      <div className="absolute w-12 h-16 top-[50px] right-0 bg-gradient-to-l from-white dark:from-dark"></div>
    </div>
    </div>
  );
}
