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

// callback pyramid || callback hell \@_@/
fs.readFile("./files/1.txt", "utf-8", (err, contents) => {
  console.log(contents);
  fs.readFile("./files/2.txt", "utf-8", (err, contents) => {
    console.log(contents);
    fs.readFile("./files/3.txt", "utf-8", (err, contents) =>
      console.log(contents)
    );
  });
});