
import Image from "next/image";
import { allBookResumes } from "@/.contentlayer/generated";
import BlogCard from "@/components/BlogCard2";
import createTagIndex from "@/lib/createTagIndex";
import createCategoryIndex from "@/lib/createCategoryIndex";
import { create } from "domain";
import tagData from "@/lib/tag-data.json";
import Link from "next/link";
import { slug } from "github-slugger";
import AsideLayout from "@/components/AsideLayout";
import ListLayout from "@/components/ListLayout";
// import { motion } from "framer-motion";
import clsx from "clsx";
// import { setTransition, fadeInWhenVisible } from "@/lib/transition";
import BlogCard4 from "@/components/BlogCard4";
import { IoArrowDownOutline } from "react-icons/io5";
import categoryData from '@/lib/category-files.json'
import { ButtonType } from '@/lib/enums';



import Carousel from "@/components/Carousel";
import Splider from "@/components/Splider";
import GradientLayout from "@/components/GradientLayout";
import { Container } from "@/components/layouts/Container";
import { Button } from "@/components/Button";
import { ArticleList } from "@/components/ArticleList";
import { ArticleCard } from "@/components/ArticleCard";
import BookList from "@/components/BookList"
import WritingList from "@/components/WritingList";


export default function Home() {
  if (!allBookResumes) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  //tag section
  //console.log(tagData)
  //createTagIndex(allPosts)
  //createCategoryIndex(allPosts)

  const allBookResumesCopy = structuredClone(allBookResumes)
  allBookResumesCopy.splice(3)

  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  const categoryKeys = Object.keys(categoryData)

  return (
    <Container>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
              I'm{' '}
              <span className="text-teal-500 dark:text-teal-400">Braydon</span>.
              I'm a developer, blogger and speaker working at LogicGate.
            </h1>
           
          </div>
          <div className="space-y-6 text-center md:text-left md:space-y-0 md:space-x-4">
          <Button
              buttonType={ButtonType.PRIMARY}
              href={'/books'}
            >
              Libros
            </Button>
            <Button
              buttonType={ButtonType.PRIMARY}
              href={'/articles'}
            >
              Blog
            </Button>
            <Button
              buttonType={ButtonType.SECONDARY}
              href={'/about'}
            >
              Acerca del sitio
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
       
       {/* <WritingList articles={allBookResumes}/> */}
        <div>
          <h2>Resúmenes recientes de libros.</h2>
         
          <ArticleList articles={allBookResumesCopy} />
          <div className="my-16">
            <Button
              buttonType={ButtonType.PRIMARY}
              href={'/books'}
            >
              Ir a todos los resúmenes
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
        <div>
          <h2>Artículos recientes.</h2>
         
          <ArticleList articles={allBookResumesCopy} />
          <div className="my-16">
            <Button
              buttonType={ButtonType.PRIMARY}
              href={'/articles'}
            >
              Ir a todos los artículos
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
      </div>
    </Container>
   
  );
}
