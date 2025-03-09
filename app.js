var http = require("http");
var fs = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream("./content/big_file.txt");
  fileStream.on("open", () => {
    /**
     * streams are useful when handling big files, network communications or end to end exchange information efficientlu
     * chunks of data processed without keeping it to memory
     * Memory and time efficient
     * Four types: 1) Readable 2) Writeable 3) duplex(both readable and writeable) 4) Transform (transform or modify data as it is read or wrtten)
     * attach writable stream to readable stream where data flow is automatically managed
     */
    fileStream.pipe(res);
  });

  fileStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
