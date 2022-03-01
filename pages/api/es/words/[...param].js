// es/words/LETTERS/MAX_WORDS

import fs from "fs";
import path from "path";
import slug from "slug";

export default async function handler(req, res) {
  const [letters, maxWords] = req.query.param;

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

  // shuffle array
  wordsFixed.sort(() => 0.5 - Math.random());

  // limit return words
  const wordsLimited = wordsFixed.slice(0, maxWords);

  res.status(200).json(wordsLimited);
}
