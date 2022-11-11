const os = require("os");


//current user info:
const user = os.userInfo();
console.log(user);


//system running time:
console.log(`System uptime in seconds:${os.uptime()}`);


const currentOs={
    name:os.type(),
    version:os.version(),
    freeMemory:os.freemem(),
    totalMemory:os.totalmem()
}

console.log(currentOs)