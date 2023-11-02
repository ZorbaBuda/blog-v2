import { Tag } from './Tag';

export function TagList({ tag, tags }) {
  return (
    <div className=" my-12 ">
     
     
      <div className="flex flex-wrap w-full gap-2  justify-center ">
        {/* Initial tag for all topics */}
        <div className="   ">
          <Tag activeTag={tag} tag="" />
        </div>
        {tags &&
          tags.map((tagItem, index) => (
            
              <Tag key={index} activeTag={tag} tag={tagItem} />
            
          ))}
      </div>

      {/* gradient fades */}
      <div className="absolute w-12 h-16 top-[50px] left-0 bg-gradient-to-r from-white dark:from-dark"></div>
      <div className="absolute w-12 h-16 top-[50px] right-0 bg-gradient-to-l from-white dark:from-dark"></div>
    </div>
  );
}
