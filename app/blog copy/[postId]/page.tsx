import { format } from "date-fns";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import * as React from "react";
// import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
// import { MdHistory } from 'react-icons/md';

import { allPosts } from "@/.contentlayer/generated";
//import Component from '@/components/mdx-component';
import { Metadata } from "next";
import { notFound } from "next/navigation";
//import { MDXComponents } from '@/components';
// import useScrollSpy from '@/hooks/useScrollspy';
import MDXComponents from "@/components/mdx-component";

import heroImg from "@/public/hero-image.png";

// import {
//   getFileBySlug,
//   getFileSlugArray,
//   getRecommendations,
// } from '@/lib/mdx.server';

import TableOfContents from "@/components/TableOfContents";

// import Layout from '@/components/layout/Layout';
// import CustomLink from '@/components/links/CustomLink';
// import ShareTweetButton from '@/components/links/ShareTweetButton';
import UnstyledLink from "@/components/UnstyledLink";
import Image from "next/image";
import Tag from "@/components/Tag";
import PostHeader from "@/components/post/PostHeader";
import useScrollSpy from "@/lib/useScrollspy";
import { HeadingScrollSpy } from "@/components/TableOfContentsTemp";

//import Tooltip from '@/components/Tooltip';

//import { BlogFrontmatter, BlogType } from '@/types/frontmatters';
type BlogParam = {
  postId: string;
};

interface BlogDetailsProps {
  params: BlogParam;
}

async function getPostFromParams(params: BlogParam) {
  const slug = params.postId;

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: BlogDetailsProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

const BlogDetails: React.FC<BlogDetailsProps> = async ({ params }) => {
  // export default function SingleBlogPage(params: BlogParam) {
  //const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  //#region  //*=========== Scrollspy ===========
  // const activeSection = useScrollSpy();
  // const [toc, setToc] = React.useState<HeadingScrollSpy>();
  // const minLevel =
  //   toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  // React.useEffect(() => {
  //   const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

  //   const headingArr: HeadingScrollSpy = [];
  //   headings.forEach((heading) => {
  //     const id = heading.id;
  //     const level = +heading.tagName.replace('H', '');
  //     const text = heading.textContent + '';

  //     headingArr.push({ id, level, text });
  //   });

  //   setToc(headingArr);
  // }, [frontmatter.slug]);
//#endregion  //*======== Scrollspy ===========
  return (
    <>
      <main>
        <section className="">
          <div className="layout">
            <PostHeader post={post} />

            <hr className="dark:border-gray-600" />

            <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
              <article className="text-white font-newsreader_light mdx leading-relaxed text-xl prose mx-auto mt-4 w-full transition-colors dark:prose-invert">
                <MDXComponents code={post.body.code} />
                {/* <Component
                  components={
                    {
                      ...MDXComponents,
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } as any
                  }
                /> */}
              </article>
              {post.toc.length > 0 && (
                <aside className="py-4">
                  <div className="sticky top-36">
                    <TableOfContents source={post.body.raw} />
                  </div>
                </aside>
              )}
            </section>

            {/* <div className='mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between'>
              <CustomLink href={GITHUB_EDIT_LINK}>
                Edit this on GitHub
              </CustomLink>
              <CustomLink href='/blog'>← Back to blog</CustomLink>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetails;
