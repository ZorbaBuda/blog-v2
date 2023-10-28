"use client";
import Image from "next/image";
import { format } from "date-fns";
import * as React from "react";
import Tag from "./tags/Tag";
import Link from "next/link";
import logo from "@/public/biology-of-love.jpg";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Category from "./Category";

type Props = {
  post: Post;
};

export default function BlogCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;

  //   console.log(imageUrl)
  //   console.log(typeof imageUrl)
  // console.log("equals? ", imageUrl === immUrl)
  return (
    <div className=" border-slate-200 border-b xl:max-w-[920px]">
      <div className="py-11 flex overflow-hidden shadow-lg">
        <Image
          className=" object-cover max-h-[250] min-w-[162px]"
          alt={coverImage}
          src={immUrl}
          width={162}
          height={250}
          loading="lazy"
        />

        <div className=" flex flex-col ml-8">

        <div className=" text-sm">
            <div className=" flex flex-wrap ">
                <Category key={category} text={category} />
            </div>
          </div>

          <div className=" mt-3 text-sm">
            <div className=" flex flex-wrap ">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>

          <Link
            className="mt-5 tracking-wide uppercase antialiased text-2xl hover:text-slate-400"
            href={`/blog/${slug}`}
          >
            {title}
          </Link>
          <span className="mt-4 border-t-2 border-solid block w-10 border-slate-600"></span>
          <div className="leading-loose  mt-4 tracking-normal font-lora line-clamp-4">
            {summary}
          </div>
          <div className=" mt-5 font-lora  text-slate-500">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
}
