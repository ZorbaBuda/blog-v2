import Image from 'next/legacy/image';
// import { handleArticleClicked } from '@/lib/handleArticleClick';
import siteMetadata from '@/data/siteMetadata';
import slugify from 'slugify';
import { Post } from "@/.contentlayer/generated";
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';


type Props = {
  post: Post;
};

export function ArticleCard({ post }: Props) {
   const { coverImage, slug, date, title, summary, tags, category } = post;

  const slug1 = slugify(title).toLowerCase();
  const formattedDate = getFormattedDate(date);
  const imageUrl = `${process.env.GITHUB_URL_IMAGES}${coverImage}`;
  const immUrl = `https://raw.githubusercontent.com/ZorbaBuda/blog-v1/main/public/${coverImage}`;
 
 
  return (
    <Link 
    href={`/blog/${slug}`}
    >
     
        <div className="group">
          <Image
            className="rounded-3xl group-hover:opacity-75"
            objectFit="cover"
            src={immUrl}
            placeholder="blur"
            blurDataURL={coverImage}
            width={684}
            height={800}
            layout="intrinsic"
            alt={'article cover'}
          />
          <div className="w-full text-left">
            <h3 className="mt-2 text-2xl">{title}</h3>
            <span className="flex items-center text-base font-semibold">
              {new Date(date).toLocaleDateString(
                siteMetadata.locale,
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }
              )}{' '}
              {/* {hasRead && (
                <span className="inline-flex items-center ml-3 text-sm text-teal-600 opacity-75 dark:text-teal-800">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
                    ></path>
                  </svg>
                  <span>read</span>
                </span>
              )} */}
            </span>
          </div>
        </div>
    
    </Link>
  );
}
