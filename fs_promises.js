const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
