// import { convertToArticleList, getAllArticles } from '@/lib/notion';
import { allBookResumes } from '@/.contentlayer/generated';
import { Container } from '@/components/layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import { TagList } from '@/components/TagList';
//import { handleArticleClicked } from '@/lib/handleArticleClick';
import slugify from 'slugify';
import Link from 'next/link';
import categoryData from '@/lib/category-files.json'
import BookResumeList from '@/components/BookResumeList';

export default function Blog() {


  const categoryKeys = Object.keys(categoryData)

  return (
    <Container title="Book resumes">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          Book Resumes
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Insightful and helpful content curated for you.
        </span>
      </h1>
      <div>
      
      </div>

      
      


      <TagList tag={''} tags={categoryKeys} />

      
      <BookResumeList articles={allBookResumes} showEndMessage fullHeight />
    </Container>
  );
}

// export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
//   const data = await getAllArticles(process.env.BLOG_DATABASE_ID);
//   const { articles, tags } = convertToArticleList(data);

//   let blogArticles = articles;

//   if (!preview || preview === undefined) {
//     blogArticles = blogArticles.filter((article) => article.isPublic === true);
//   }

//   const featuredArticle = blogArticles[0];

//   return {
//     props: {
//       featuredArticle,
//       articles: blogArticles.slice(1),
//       tags
//     },
//     revalidate: 30
//   };
// };
