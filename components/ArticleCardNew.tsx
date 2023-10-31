import Image from "next/image";
// import { handleArticleClicked } from '@/lib/handleArticleClick';
import siteMetadata from "@/data/siteMetadata";
import slugify from "slugify";
import { DocumentTypes } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import pic1 from "@/public/pic1.png";
import { BsArrowDownRightSquare } from "react-icons/bs";
import EyeInfo from '@/assets/reshot-icon-eye.svg'

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
      <div className="max-w-2xl mx-auto">
        <div className="font-montserrat bg-white shadow-md border border-gray-200  max-w-sm dark:bg-gray-800 dark:border-gray-700">
          {/* <a href="#">
             <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""> 
          </a> */}
          <Image
            className=" object-none "
            alt={immUrl}
            src={pic1}
            width={359}
            height={200}
            loading="lazy"
          />
          <div className="p-3">
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              {formattedDate}
            </p>
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                {title}
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
              Arthur Janov, 1973
            </p>
          
          </div>
          <div className="flex ">
          <Image className="text-sky-600" src={EyeInfo} width={32} height={32} alt={EyeInfo} />
          <svg
           xmlns="http://www.w3.org/2000/svg" 
           className="text-sky-600   h-8 w-8"
                fill="currentColor"
           viewBox="0 0 32 32">
            <title>8-Arrow Down</title>
            <g id="_8-Arrow_Down" data-name="8-Arrow Down">
              <path d="M30,15V28.59L1.71.29.29,1.71,28.59,30H16v2H31a1,1,0,0,0,1-1V15Z" />
            </g>
          </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
