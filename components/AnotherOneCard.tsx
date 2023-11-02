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

export function ArticleCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;

  return (
  
       
             
              <div className="col-span-1 flex flex-col bg-white border-2 p-4">
                  <Link href={`/blog/${slug}`}>
                <h2 className="mb-2 font-bold text-2xl">{title}</h2>
                <div className="mb-4 flex flex-wrap">
                  <span className="mr-2">Link 1</span>
                  <span className="mr-2">Link 2</span>
                </div>
                <p className="text-md text-justify">
                 {summary}
                </p>
                <div className="flex flex-wrap mt-auto pt-3 text-xs">
                  <p className="mr-2 mb-2">{formattedDate}</p>
                  <p className="mr-2 mb-2">Tag #2</p>
                </div>
                 </Link> 
              </div>
          

  
  );
}
