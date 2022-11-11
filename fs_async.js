const {readFile,writeFile}=require('fs');


readFile('./content/first.txt','utf8',(err,res)=>{
    if(err){
        console.log("Error reading file");
        return;
    }

    const first=res;

    readFile('./content/second.txt','utf8',(err,res)=>{
        if(err){
            console.log("Error reading file");
            return;
        }
    
        const second=res;

        writeFile('./content/result_async.txt',`${first+second}`,(err,res)=>{
            if(err){
                console.log("Error creating file!");
                return;
            }
            console.log(res);
        })
    })
})

