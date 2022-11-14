//streams node js:

const {createReadStream} = require('fs');

const readStream = createReadStream('./content/big.txt',{highWaterMark:9000});
// const readStream = createReadStream('./content/big.txt',{highWaterMark:9000,encoding:'utf8'});

/* Streams are used to read big files: 
1. default buffer chunk size:64 kb
2. highWaterMark: controls the size of buffer of readstrem
3. last buffer-remainder
 */
readStream.on(`data`,(res)=>{
    console.log(res);
})


readStream.on(`error`,(err)=>console.log(err))