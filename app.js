var http=require('http');
var fs=require('fs');


http.createServer(
    (req,res)=>{
    //    res.end(fs.readFileSync('./content/big.txt','utf8')) 

    const fileStream=fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>console.log(err))
    }
).listen(5000);