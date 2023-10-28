import React from 'react'
import './output.css'
import BlogCard from './BlogCard'
export default function GradientLayout() {
  return (
    
      <section
      className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white"
    >
     <BlogCard />
     <BlogCard />
     <BlogCard />
    </section>
    
  )
}
