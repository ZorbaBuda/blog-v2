import { ArticleCard } from "@/components/ArticleCard";
import { PageTransition } from "./PageTransition";
import Image from "next/legacy/image";
import { DocumentTypes } from "@/.contentlayer/generated";
import getFormattedDate from "@/lib/getFormattedDate";
import slugify from "slugify";
import Link from "next/link";

type Props = {
  post: DocumentTypes;
};

export function Writing({ post }: Props) {
  const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;

  return (
    <Link href={`/blog/${slug}`}>
      <article className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group">
        <Image
          className=" group-hover:opacity-75"
          objectFit="cover"
          src={immUrl}
          placeholder="blur"
          blurDataURL={coverImage}
          // width={684}
          width={484}
          height={800}
          layout="fill"
          alt={"article cover"}
        />
        <div className="bg-black bg-opacity-5 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
          <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
           {title}
          </h1>
          <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
          <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
           {summary}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default function WritingList({
  articles,
  showEndMessage = false,
  fullHeight = false,
}) {
  return (
    <section className="container mx-auto py-10 md:py-20 antialiased ">
    <section className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img className="mx-auto mb-20 mt-10 w-40" src="https://penpot.app/images/cross-teams.webp" alt="" />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                For cross-domain teams
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                Product features and capabilities meant for the different roles in the next-decade team. Say goodbye to the legendary pain of the design silo.
            </p>
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img className="mx-auto mb-20 mt-10 w-40" src="https://penpot.app/images/open-standards.webp" alt="" />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                With love and Open Standards
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center">
                Using SVG as no other prototyping tool does, Penpot files sport compatibility with most of the vectorial tools, are tech friendly and extremely easy to use in web.
            </p>
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img className="mx-auto mb-20 mt-10 w-40" src="https://penpot.app/images/multi-platforms.webp" alt="" />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                Multiplatform
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                Being web based, Penpot is not dependent on operating systems or installations, you will only need to run a modern browser.
            </p>
        </article>

        <article className="mx-auto max-w-sm pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
            <img className="mx-auto mb-20 mt-10 w-40" src="https://penpot.app/images/open-source.webp" alt="" />
            <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                Open Source power
            </h2>
            <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                Build for the community and empowered by the community. Extreme adaptability: contributions can range from add-ons and plugins to core functionality.
            </p>
        </article>
    </section>
    <p className="text-xs text-center text-gray-400 mt-10">
        Inspired From: https://penpot.app
    </p>
</section>
  );
}
