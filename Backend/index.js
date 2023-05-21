const express = require("express");
require('dotenv').config()
const Connect=require("./Config/Config")
const {UploadModel} =require("./Model/UploadModel")
const app = express();
const cors=require("cors")
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.post("/upload",async(req, res,next) => {
const payload=req.body
try{
   const data=new UploadModel(payload)
   await data.save()
   res.send(data)
}
catch{
  res.send("Err")
}
});

app.listen(process.env.PORT,async(req,res)=>{
    try{
      await Connect
      console.log("server is running in Port 8080")
    }
    catch{
        console.log("Server Error")
    }
});
  