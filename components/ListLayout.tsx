'use client'

import AsideLayout from './AsideLayout'
import BlogCard from './BlogCard4'
import type { Post } from '@/.contentlayer/generated'

type Props = {
  posts: Post[];
};


export default function ListLayout({posts}: Props) {
 


  return (
    <>
      <main className="mt-24 flex  flex-wrap  flex-[3]">
      {/* <main className="flex items-center justify-between"> */}
      <div>
        <div>POSTS</div>
        <ul className="">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </ul>
      </div>
    
    </main>
    </>
  )
}
