import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Category = ({ text }: Props) => {
  return (
    <Link
      href={`/categories/${slug(text)}`}
      className="tracking-wider font-montserrat pr-4  text-sm font-medium uppercase text-[#AB3127] hover:underline dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Category
