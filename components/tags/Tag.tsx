import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="
      tracking-wide 
      font-montserrat p-2 mr-5   text-xs 
      uppercase bg-[#252525] text-slate-300 hover:bg-gray-500 
      dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
