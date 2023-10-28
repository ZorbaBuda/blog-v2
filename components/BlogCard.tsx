
import Image from "next/image";
import { format } from "date-fns";
import * as React from "react";
import Tag from "./Tag";
import Link from "next/link";
import logo from "@/public/biology-of-love.jpg";
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Category from "./Category";
import './output.css'
import generate from '@/lib/gradientGenerator' //TODO external function

type Props = {
  post: Post;
};

export default  function BlogCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;
 

  //   console.log(imageUrl)
  //   console.log(typeof imageUrl)
  // console.log("equals? ", imageUrl === immUrl)

  const bgGradient = generate();
  //const grad ='bg-[linear-gradient(153deg,_#3c2e08,_#18bef7)]'
  //const style = `absolute my-rotate-y-180 backface-hidden w-full h-full ${bgGradient} overflow-hidden`
  console.log(bgGradient)
 
  return (

    <div
    className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective p-4"
  >
    <div
      className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
    >
      <div className="absolute backface-hidden border-2 w-full h-full">
       
        <Image
        className=" w-full h-full"
        src={immUrl}
        alt="coverImage"
        // width={324}
        // height={500}
        width={162}
        height={250}
      />
      </div>
      <div
        className={`absolute my-rotate-y-180 backface-hidden w-full h-full  overflow-hidden`}
        style={{background: `${bgGradient}` }}
      >
        <div
          className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
        >
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="my-2">Arthur Janov, 1973</p>
          <p>
           {summary}
          </p>
          <button
            className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
          >
            Leer
          </button>
        </div>
      </div>
    </div>
  </div>

  //   <Link className="mx-auto pb-5 max-w-sm transform duration-500 hover:-translate-y-1 cursor-pointer group"
  //   href={`/blog/${slug}`}>
  //   <div className="max-h-125 overflow-hidden">
  //     <Image
  //       className="transform duration-300 group-hover:scale-110"
  //       src={immUrl}
  //       alt="coverImage"
  //       // width={324}
  //       // height={500}
  //       width={162}
  //       height={250}
  //     />
  //   </div>
  //   <div className="flex flex-wrap   my-5 ">
    
  //             {tags.map((tag) => (
  //               <Tag key={tag} text={tag} />
  //            ))}
         
     
  //   </div>
  //   <h2 className="font-bold text-2xl">
  //     {title}
  //   </h2>
  //   <h2 className="font-bold text-xl mt-3">
  //     Arthur Janov, 1973
  //   </h2>
  //   <div className="flex justify-between items-center mt-3 ">
  //     <div className="text-base uppercase font-semibold text-gray-500">
  //       {summary}
  //     </div>
  //     <div className="text-base text-right">
       
  //     </div>
  //   </div>
  // </Link>

    // <div className=" border-slate-200 border-b xl:max-w-[920px]">
    //   <div className="py-11 flex overflow-hidden shadow-lg">
    //     <Image
    //       className=" object-cover max-h-[250] min-w-[162px]"
    //       alt={coverImage}
    //       src={immUrl}
    //       width={162}
    //       height={250}
    //       loading="lazy"
    //     />

    //     <div className=" flex flex-col ml-8">

    //     <div className=" text-sm">
    //         <div className=" flex flex-wrap ">
    //             <Category key={category} text={category} />
    //         </div>
    //       </div>

    //       <div className=" mt-3 text-sm">
    //         <div className=" flex flex-wrap ">
    //           {tags.map((tag) => (
    //             <Tag key={tag} text={tag} />
    //           ))}
    //         </div>
    //       </div>

    //       <Link
    //         className="mt-5 tracking-wide uppercase antialiased text-2xl hover:text-slate-400"
    //         href={`/blog/${slug}`}
    //       >
    //         {title}
    //       </Link>
    //       <span className="mt-4 border-t-2 border-solid block w-10 border-slate-600"></span>
    //       <div className="leading-loose  mt-4 tracking-normal font-lora line-clamp-4">
    //         {summary}
    //       </div>
    //       <div className=" mt-5 font-lora  text-slate-500">{formattedDate}</div>
    //     </div>
    //   </div>
    // </div>
  );
}

