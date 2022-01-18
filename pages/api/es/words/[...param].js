// es/words/LETTERS/MAX_WORDS

import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  const [letters, maxWords] = req.query.param

  const directory = path.join(process.cwd());
  const file = fs.readFileSync(`${directory}/dictionary/es/${letters}_letters.txt`, 'utf8');
  const words = file.split('\n');

  // fix acentos
  const wordsFixed = words.map(word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, ""));

  // shuffle array
  wordsFixed.sort(() => 0.5 - Math.random());

  // limit return words
  const wordsLimited = wordsFixed.slice(0, maxWords);


  res.status(200).json(wordsLimited);
}