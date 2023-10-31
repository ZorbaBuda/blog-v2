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

export function Card({ post }: Props) {
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

export default function ArticleList({
  articles,
  showEndMessage = false,
  fullHeight = false,
}) {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
      <section className="grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-10 ">
        {articles.map((post) => (
          <Card key={post.title} post={post} />
        ))}
      </section>
    </section>
  );
}
