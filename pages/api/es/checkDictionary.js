// es/checkDictionary/LETTERS/WORD

import fs from "fs";
import path from "path";
import slug from "slug";

export default async function handler(req, res) {
  console.log(req.query);
  const [letters, word] = req.query.param;

  const directory = path.join(process.cwd());
  const file = fs.readFileSync(
    `${directory}/dictionary/es/${letters}_letters.txt`,
    "utf8"
  );
  const words = file.split("\n");

  // fix acentos
  slug.charmap["ñ"] = "ñ";
  const wordsFixed = words.map((word) => {
    return slug(word);
  });

  console.log(wordsFixed);

  res.status(200).json(wordsFixed);
}
