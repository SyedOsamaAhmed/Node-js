// built-in modules

const path = require("path");

const filePath = path.join("/content", "generic", "test.txt");
const base = path.basename(filePath);
const absolute = path.resolve(__dirname, "content", "generic", "text.txt");

console.log(path.sep);
console.log(filePath);
console.log(base);
console.log(absolute);
