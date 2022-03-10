let a=10,b=0;






//promises:
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(20);
    }, 3000);
    
})


waitingData.then((data)=>{

    console.log(a+data)
})