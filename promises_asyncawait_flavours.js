const { readFile, writeFile } = require("fs").promises;


// const utils = require("util");
// const readFilePromise = utils.promisify(readFile);
// const writeFilePromise = utils.promisify(writeFile);

//Promises:
// function getText(path) {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));


//Async await:

const start = async () => {
    try {
      const first = await readFile("./content/first.txt", "utf8");
      const second = await readFile("./content/second.txt", "utf8");
      await writeFile("./content/file_utils.txt", `${first + second}`);
    } catch (error) {
      console.log(error);
    }
  };
  
  start();