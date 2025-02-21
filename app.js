// built-in modules

const os = require("os");

//current user information
console.log(os.userInfo());

//total system running time

console.log(`System running time : ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
