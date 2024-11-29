const fs = require("fs");
/* 
const files = [1, 2, 3]
  .map((number) => `./files/${number}.txt`)
  .map((filename) => fs.readFileSync(filename, "utf-8"));

console.log(files); */

/* const text1 = fs.readFile('./files/1.txt', 'utf8');
const text2 = fs.readFile('./files/2.txt', 'utf8');
const text3 = fs.readFile('./files/3.txt', 'utf8');

console.log(text1, text2, text3);
 */

/* // callback pyramid || callback hell \@_@/
fs.readFile("./files/1.txt", "utf-8", (err, contents) => {
  console.log(contents);
  fs.readFile("./files/2.txt", "utf-8", (err, contents) => {
    console.log(contents);
    fs.readFile("./files/3.txt", "utf-8", (err, contents) =>
      console.log(contents)
    );
  });
}); */

const readFile = async (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, contents) => {
      if (err) return reject(err);
      resolve(contents);
    });
  });
};

const files = [1, 2, 3].map((number) => `./files/${number}.txt`);

/* readFile(files[0])
    .then(console.log)
    .then(() => readFile(files[1]))
    .then(console.log)
    .then(() => readFile(files[2]))
    .then(console.log)
    .then(() => console.log('finished!')) */

/* readFile(file1)
  .then(() => readFile(file2))
  .then(() => readFile(file3))
  .then(() => console.log("finished!")); */

const main = async () => {
  const contents1 = await readFile(files[0]);
  console.log(contents1);

  const contents2 = await readFile(files[1]);
  console.log(contents2);

  const contents3 = await readFile(files[2]);
  console.log(contents3);

  console.log("finished!");
};

main();
