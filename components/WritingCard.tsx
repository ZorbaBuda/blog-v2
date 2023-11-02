import Image from "next/image";
// import { handleArticleClicked } from '@/lib/handleArticleClick';
import siteMetadata from "@/data/siteMetadata";
import slugify from "slugify";
import { DocumentTypes } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import pic1 from "@/public/pic1.png";
import { BsArrowDownRightSquare } from "react-icons/bs";
import Prisoner from "@/public/prisoner-of-pain.jpeg";
import { Info } from "./social-icons/icons";


type Props = {
  post: DocumentTypes;
};

export function WritingCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;

  return (
  
      <div className="antialiased  xl:max-w-[920px]
      transform duration-500 hover:-translate-y-2">
        
          <Link href={`/document/${slug}`}>
      <Image
            className="mt-0 h-44 w-full object-cover overflow-hidden"
            alt={immUrl}
            src={Prisoner}
            width={301}
            height={180}
            loading="lazy"
            // objectFit="cover" 
          />
        {/* <img
          src={immUrl}
          alt=""
          className="w-96 h-auto"
        /> */}
        <div className=" text-center font-eina antialiased relative">
        
          <div  className="text-white text-sm ">{formattedDate}</div>
          
         
          <div className="font-bold mt-4 text-2xl text-white">{title}</div>
          <div className="text-white  mt-4 text-base">{summary}</div>
        
          {/* <div className="flex justify-between mb-4">
             <div onMouseEnter={() => alert("hi")} > 
          <Image
            className="rounded-lg h-28 w-auto object-fill "
            alt={immUrl}
            src={immUrl}
            width={100}
            height={300}
            loading="lazy"
            // objectFit="cover" 
          />
         
          <svg
           xmlns="http://www.w3.org/2000/svg" 
           className="text-white   h-7 w-7 absolute bottom-7 right-7 "
                fill="currentColor"
           viewBox="0 0 32 32">
            <title>8-Arrow Down</title>
            <g id="_8-Arrow_Down" data-name="8-Arrow Down">
              <path d="M30,15V28.59L1.71.29.29,1.71,28.59,30H16v2H31a1,1,0,0,0,1-1V15Z" />
            </g>
          </svg>
          </div> */}
        
        </div>
         </Link>
      </div>
   
  );
}
