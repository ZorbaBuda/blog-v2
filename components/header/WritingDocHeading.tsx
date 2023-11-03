import { BookResume, DocumentTypes } from "@/.contentlayer/generated";
import React from "react";
import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";
import Category from "../Category";
import Tag from "../tags/Tag";
import Prisoner from "@/public/hero-image.png";

type Props = {
  post: DocumentTypes;
};

export default function WritingDocHeading({ post }: Props) {
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${post.coverImage}`;
  const formattedDate = getFormattedDate(post.date);
  return (
    <article className="mx-auto antialiased flex flex-col px-8 lg:px-0 text-white">

      <div className="lg:text-7xl text-3xl mt-5 font-semibold">
        {post.title}
      </div>

      <div className="mt-5 flex justify-between font-lora  text-white text-base">
      <div className="  ">
        {formattedDate}
      </div>
     

        <div className="ml-7 flex flex-wrap">
          {post.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
     
</div>
      <Image
        layout="responsive"
        className="mt-4 lg:ml-0 ml-3 object-cover my-0 w-[468px] h-[309px] lg:w-max lg:h-auto md:w-[354px] md:h-[539px] "
        alt={"p"}
        src={Prisoner}
        width={491}
        height={731}
        loading="lazy"
      />

    </article>

    //   <article className="col-span-12 mt-12">
    //   <div className="space-y-16">
    //     <div>
    //       <h1 className="mb-5 text-3xl text-center font-headings md:text-5xl">
    //         {post.title}
    //       </h1>
    //       <div className="text-center">
    //         <div className="flex items-center justify-center mb-2 space-x-2 text-base">
    //           <p className="m-0">{new Date(post.date).toISOString()}</p>
    //           <p className="m-0">|</p>

    //         </div>

    //       </div>
    //     </div>
    //     <div>
    //       <div
    //         className="aspect-video lg:aspect-[2/1]"
    //         style={{ position: 'relative', overflow: 'hidden' }}
    //       >
    //         <Image
    //           className=""
    //           width={354}
    //           height={539}
    //           src={immUrl}
    //           alt={'article cover'}
    //           priority
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </article>
  );
}
