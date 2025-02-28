const { writeFileSync, createReadStream } = require("fs");

for (i = 0; i < 10000; i++) {
  writeFileSync("./content/big_file.txt", `Hello world: ${i}\n`, {
    flag: "a",
  });
}
/**
 * highWaterMark: for controlling buffer size
 * default buffer size is 64kb
 */
const stream = createReadStream("./content/big_file.txt", {
  highWaterMark: 90000,
});

stream.on("data", (result) => console.log(result));

stream.on("error", (err) => console.log(err));
