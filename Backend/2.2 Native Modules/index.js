const a = require("fs")

// a.writeFile("message.txt","Hello from NodeJS",(err)=>{
//     if(err) throw err;
//     console.log("The file has been saved successfully");
// })

a.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});