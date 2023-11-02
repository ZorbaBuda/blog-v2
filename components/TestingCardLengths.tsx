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
import { allBookResumes } from "@/.contentlayer/generated";

type Props = {
  post: DocumentTypes;
};

export function Cardd({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;

  return (
    
      <div className="w-1/4 mx-5 px-8 py-10 bg-blue-600 rounded-lg shadow-md text-center">
      <Link href={"/blog"}>
        <article>{title}</article>
        <article className=" text-sm text-gray-700 dark:text-gray-300">
          {summary}
        </article>
          </Link>
      </div>
    
   
  );
}

export default function TestingCardLengths({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;

  return (
    // <div className="container mx-auto p-6 grid grid-cols-2 gap-4">

    <div className=" w-full items-stretch flex flex-wrap">
      {allBookResumes.map((p) => (
        <Cardd key={p._id} post={p} />
      ))}
    </div>
  );
}
