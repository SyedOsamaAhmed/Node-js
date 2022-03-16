const express=require('express');
const EventEmitter=require('events');
app=express();


const event=new EventEmitter();
let count=0;
event.on("CountApi",()=>{
    count++;
    console.log("Event called",count);
})


app.get("/",(req,resp)=>{
    resp.send("Api called!");
    event.emit("CountApi");

})

app.listen(5000);