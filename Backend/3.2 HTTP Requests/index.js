import express from "express"

const app = express()
const port = 3100

app.get("/",(req,res)=>{
  console.log(req.rawHeaders);
  res.send("<h2>Hello world</h2>")
})

app.get("/about",(req,res)=>{
  res.send("<h2>About me Page</h2>")
})

app.get("/contact",(req,res)=>{
  res.send("<h2>contact page</h2>")
})
app.listen(port,()=>{
  console.log(`the server is running on port ${port} \nto close the server click CTRL + C`)
})