import { slug } from 'github-slugger'
//import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
//import ListLayout from '@/layouts/ListLayoutWithTags'
import { allPosts } from '@/.contentlayer/generated'
import tagData from '@/lib/tag-files.json'
//import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import ListLayout from '@/components/ListLayout'
import { Post } from '@/.contentlayer/generated'
import Link from 'next/link'
import Tag from '@/components/tags/Tag'
import tagFiles from '@/lib/tag-files.json'

export default function page({ params} : { params: { tag: string }}) {

  const tagKeys = Object.keys(tagFiles)
  
  const tag = decodeURI(params.tag)
  if(tag !== "all"){
  const tagFiles = tagData[tag]
  var filtered: Post[] = []
  tagFiles.forEach((t: string) => {
    allPosts.forEach((p) => {
      if(t === p.filePath){
        filtered.push(p);
        return
      }
    })
    
  })
}
  return (
    <>
    <div className="mt-10 flex  flex-wrap">
    {tagKeys.length === 0 && 'No tags found.'}
    {tagKeys.map((t) => {
      return (
        <div key={t} className="mb-2 mr-5 mt-2">
          <Tag text={t} />
          <Link
            href={`/tags/${slug(t)}`}
            className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
            aria-label={`View posts tagged ${t}`}
          >   
          </Link>
        </div>
      )
    })}
  </div>
    <div>
      <div className='mt-10'>Browsing  {tag}  Tag   </div>
      <ListLayout posts={tag!== "all" ? filtered  : allPosts} />
    </div>
    </>
  )
}
