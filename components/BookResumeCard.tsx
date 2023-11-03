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
import { Button } from "./Button";
import { ButtonType } from "@/lib/enums";
import AnimatedArrowOnHover from "./AnimatedArrowOnHover";

type Props = {
  post: DocumentTypes;
};

export function BookResumeCard({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;

  // transform duration-500 hover:-translate-y-2 

  return (
    <div
      className="antialiased  xl:max-w-[920px] group  transform transition duration-500 hover:scale-105
      
    
    "
    >
      <Link className="" href={`/document/${slug}`}>
        <div className=" flex ">
          <Image
            className=" object-cover my-0 h-[266px] w-auto "
            alt={coverImage}
            src={immUrl}
            width={600}
            height={800}
            loading="lazy"
          />

          <div className=" flex flex-col ml-8">
            {/* <div className=" text-sm">
          <div className=" flex flex-wrap ">
              <Category key={category} text={category} />
          </div>
        </div> */}

            {/* <div className=" mt-3 text-sm">
          <div className=" flex flex-wrap ">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div> */}

            <div className="text-3xl text-white">{title}</div>

            <div className="text-white text-xl mt-4">Arthur Janov, 1973</div>

            {/* <span className="mt-4 border-t-2 border-solid block w-10 border-slate-600"></span> */}
            <div className="text-white leading-normal  text-base mt-4 tracking-normal  line-clamp-4">
              {summary}
            </div>
            <div className="flex justify-between lg:bottom-3 lg:absolute ">
            <div className=" mt-5 font-lora  text-slate-500 text-base">
              {formattedDate}
            </div>
            {/* <AnimatedArrowOnHover /> */}
            {/* <Button buttonType={ButtonType.PRIMARY} href={`/document/${slug}`}>
              Leer más
            </Button> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
