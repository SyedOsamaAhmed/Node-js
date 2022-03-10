const fs = require("fs");

const path = require("path");
const dirpath = path.join(__dirname, "files");
console.log(dirpath)

for (i = 0; i < 5; i++) {
  fs.writeFileSync(dirpath + "/hello" + i + ".txt", "a simple text");
}


fs.readdir(dirpath,(err,files)=>{
    console.log(files)
    files.forEach((items)=>{
        console.log("file name is:\n" + items)
    })
})