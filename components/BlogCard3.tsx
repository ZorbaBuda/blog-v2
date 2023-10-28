"use client";
import Image from "next/image";
import { format } from "date-fns";
import * as React from "react";
import Tag from "./Tag";
import Link from "next/link";
import logo from "@/public/biology-of-love.jpg";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: Post;
};

export default function BlogCard({ post }: Props) {
  const { banner, slug, date, title, summary, tags } = post;
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${banner}`
  const immUrl=`https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${banner}`
  
  console.log(imageUrl)
  console.log(typeof imageUrl)
console.log("equals? ", imageUrl === immUrl)
  return (

    <li className="border-slate-200 border">
      <div className="rounded overflow-hidden shadow-lg">
      <Image className=" object-cover w-full h-60" 
          alt={banner} 
          src={immUrl} 
           width={500} 
           height={500}
           loading='lazy'
           
           />
      </div>
     <div className="flex flex-col p-4">
      <div className="mt-5 text-sm">
      <div>{formattedDate}</div>
      <div className="mt-5 flex ">
                 {tags.map((tag) => (
                   <Tag key={tag} text={tag} />
                ))}
              </div>
        </div>
        <div>
        <Link className="underline" href={`/blog/${slug}`}>
          {title}
          </Link>
        </div>
        <div className="prose">
         {summary}
        </div>
        </div>
        
      </li>
    

  
  );
}
