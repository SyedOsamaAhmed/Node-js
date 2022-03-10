const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;
//Writing file
//fs.writeFileSync(filePath,"this is apple");


//Reading file
/* fs.readFile(filePath, "utf-8", (err, items) => {
  console.log(items);
}); */


//Appending file:
/* fs.appendFile(filePath, "This is an appended text!", (err) => {
  if (!err) {
    console.log("File updated");
  }
}); */

//Renaming file:
/* fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err){
        console.log("file path updated")
    }

}) */

//Deleting file:
fs.unlinkSync(`${dirPath}/fruit.txt`);
