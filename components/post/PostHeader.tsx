import React from 'react'
import heroImg from '@/public/hero-image.png'
import { format } from 'date-fns';
import Image from 'next/image';
import Tag from '../tags/Tag';
import { Post } from '@/.contentlayer/generated';

type Props = {
  post: Post;
};

export default function PostHeader({ post }: Props) {
  const { title, date, tags} = post;
  return (
    <div className='mt-24 pb-4 dark:border-gray-600'>
    <Image
      src={heroImg}
      alt={`Photo`}
      // width={1200}
     
      height={(1200 * 2) / 5}
      // aspect={{ height: 2, width: 5 }}
    />

    <div className='font-minion_pro mt-10 text-5xl bold'>{post.title}</div>

    <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
      Written on{' '}
      {format(new Date(date), 'MMMM dd, yyyy')} by
      ZorbaBuda.
    </p>
    <div className="mt-2 flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
   

  </div>
  )
}
