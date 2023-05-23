const express = require("express");
require('dotenv').config()
const Connect=require("./Config/Config")
const app = express();
const {DataRoute} =require("./Route/DataRoute")
const {RedirectUrl} =require("./Route/RedirectUrl")
const cors=require("cors")
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/",DataRoute)
app.use("/",RedirectUrl)
app.listen(process.env.PORT,async(req,res)=>{
    try{
      await Connect
      console.log("server is running in Port 5000")
    }
    catch{
        console.log("Server Error")
    }
});
  