const { readFile, writeFile } = require("fs").promises;
// const utils = require("util");
// const readFilePromise = utils.promisify(readFile);
// const writeFilePromise = utils.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");

    await writeFile(
      "./content/second.txt",
      `This is async await writing: ${first}`
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
