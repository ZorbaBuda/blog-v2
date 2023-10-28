import Image from "next/image";
import { allPosts } from "@/.contentlayer/generated";
import BlogCard from "@/components/BlogCard4";
import createTagIndex from "@/lib/createTagIndex";
import createCategoryIndex from "@/lib/createCategoryIndex"
import { create } from "domain";
import tagData from "@/lib/tag-data.json";
import Link from "next/link";
import { slug } from "github-slugger";
import Tag from "@/components/Tag";
import AsideLayout from "@/components/AsideLayout";
import ListLayout from "@/components/ListLayout";

export default function Home() {
  if (!allPosts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  //tag section
  //console.log(tagData)
  //createTagIndex(allPosts)
  //createCategoryIndex(allPosts)

  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  return (
    <div className="flex flex-wrap">
    <ListLayout posts = {allPosts} />
    <AsideLayout />
    </div>
    // <main className="mt-24 flex  flex-wrap  flex-[3]">
    //   {/* <main className="flex items-center justify-between"> */}
    //   <div>
    //     <div>POSTS</div>
    //     <ul className="">
    //       {allPosts.map((post) => (
    //         <BlogCard key={post._id} post={post} />
    //       ))}
    //     </ul>
    //   </div>
    //   <AsideLayout />
    // </main>
  );
}
