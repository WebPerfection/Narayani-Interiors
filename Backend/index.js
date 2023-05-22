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
app.get("/getdata",async(req,res)=>{
  try{
     const data = await UploadModel.find()
     res.send(data)
  }
  catch{
    res.send("Err Get Section")
  }
})
app.get("/getdata/:id",async(req,res)=>{
  const id=req.params.id
  try{
     const data = await UploadModel.findOne({"_id":id})
     res.send(data)
  }
  catch{
    res.send("Err Get Section")
  }
})
app.delete("/delete/:id",async(req,res)=>{
  const id = req.params.id
  try{
      await UploadModel.findByIdAndDelete({"_id":id})
      res.send("Delete success")
  }
  catch{
     res.send("err Delete section")
  }
})
app.patch("/update/:id",async(req,res)=>{
  const id = req.params.id
  const payload=req.body
  try{
      await UploadModel.findByIdAndUpdate({"_id":id},payload)
      res.send("Update success")
  }
  catch{
     res.send("err Update section")
  }
})
app.post("/upload",async(req, res,next) => {
const payload=req.body
const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;
try{
   const data=new UploadModel({...payload,date:formattedDate})
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
  