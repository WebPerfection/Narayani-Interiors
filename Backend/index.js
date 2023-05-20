const express = require("express");
require('dotenv').config()
const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const Connect=require("./Config/Config")
const {UploadModel} =require("./Model/UploadModel")
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        console.log("file",file)
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
       
    },
  }),
}).array("user_photo",2);

cloudinary.config({ 
    cloud_name:"dzncmx0fd", 
    api_key: "787514261423265", 
    api_secret:process.env.api_secret
  }); 
app.post("/upload",upload, async(req, res,next) => {

   const title=req.body.title
   const description=req.body.description
   const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Note: Month starts from 0, so we add 1
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;



    async function uploadImages() {
        const files = req.files; 
        // console.log(files)
        const uploadPromises = files.map((file) => {
          return cloudinary.uploader.upload(file.path);
        });
      
        const uploadedImages = await Promise.all(uploadPromises);
      
        const imageUrls = uploadedImages.map((image) => {
          return image.url;
        });
      
        console.log('Images uploaded:', imageUrls);
        const payload={
            title,
            images:imageUrls, 
            description,
            date:formattedDate
        }
        const data=new UploadModel(payload)
        await data.save()
        res.send(data)
      }
      
      try{
        uploadImages().catch(console.error);
      }
    
    
   catch{
    res.send("file uploaded err");
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
 