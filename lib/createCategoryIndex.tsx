import { writeFileSync } from "fs";

// const tagRecord2 = {
//   "github" : ["file1", "file2", "file3"],
//   "markdown" : ["file2", "file3", "file4"],
// }

export default function createTagIndex(allPosts) {
  const categoryRecord = {};
  allPosts.forEach((file) => {
    if (file.category in categoryRecord) {
      categoryRecord[file.category].push(file.filePath);
    } else {
      categoryRecord[file.category] = [];
      categoryRecord[file.category].push(file.filePath);
    }
  });

  writeFileSync("./lib/category-files.json", JSON.stringify(categoryRecord));
}
