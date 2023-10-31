import Image from "next/image";
// import { handleArticleClicked } from '@/lib/handleArticleClick';
import siteMetadata from "@/data/siteMetadata";
import slugify from "slugify";
import { DocumentTypes } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import pic1 from "@/public/pic1.png";
import { BsArrowDownRightSquare } from "react-icons/bs";
import EyeInfo from "@/assets/reshot-icon-eye.svg";
import { Info } from "./social-icons/icons";


type Props = {
  post: DocumentTypes;
};

export function ArticleCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;

  return (
    <Link href={`/blog/${slug}`}>
      <div className="group bg-slate-900">
      <Image
            className="overflow-hidden h-52 w-full object-cover "
            alt={immUrl}
            src={immUrl}
            width={359}
            height={200}
            loading="lazy"
           
    objectFit="cover" 
          />
        {/* <img
          src={immUrl}
          alt=""
          className="w-96 h-auto"
        /> */}
        <div className="px-6 font-eina antialiased relative">
          <div className="flex justify-between">
          {/* onMouseEnter={() => alert("hi")} */}
          <div  className="text-white text-sm ">{formattedDate}</div>
           <Info  className="w-7 h-7 text-slate-600"/>
          </div>
          <div className="font-bold mt-5 text-2xl text-white">{title}</div>
          <div className="text-white pb-20 mt-5">Arthur Janov, 1973</div>
          {/* <Info className="w-7 h-7"/> */}
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
        
        </div>
      </div>
    </Link>
  );
}
