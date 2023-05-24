const express=require("express")
const RedirectUrl=express.Router()
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const {UrlModel}=require("../Model/UrlModel")
const axios = require('axios');
RedirectUrl.use(
  session({
    secret: "narayni",
    resave: true,
    saveUninitialized: true
  })
);
RedirectUrl.use(passport.initialize());
RedirectUrl.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: "426326097603-aabqi1reai6v67rtshioao1160370skm.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/google/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
let ipAdress;
const getIpAddress = async () => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    const data = response.data;
    return data.ip;
  } catch (error) {
    console.log(error);
    return null;
  }
};

getIpAddress()
  .then((ipAddress) => {
    ipAdress=ipAddress;
  })
  .catch((error) => {
    console.log('Error:', error);
  });
  console.log(ipAdress)
RedirectUrl.post("/posturl",async(req,res)=>{
  
  const payload=req.body
  console.log(payload)
  try{
    const avl=await UrlModel.find({"_ip":ipAdress})
    if(avl.length>0){
      res.send("avl")
    }
    else{
      const data=new UrlModel({...payload,"_ip":ipAdress})
      await data.save()
      res.send("success")
    }
    
  }
  catch(err){
    res.send(err)
  }
})
RedirectUrl.patch("/update",async(req,res)=>{
console.log(ipAdress)
  const payload=req.body
  try{
    const avl=await UrlModel.findOne({"_ip":ipAdress})
    console.log(avl._id.toString())
     const data=await UrlModel.findByIdAndUpdate({"_id":avl._id.toString()},{url:payload.url})
     res.send(data)
  }
  catch{
     res.send("err update")
  }
})
RedirectUrl.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

RedirectUrl.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async function (req, res) {
    try{
      const {url,_id}=await UrlModel.findOne({"_ip":ipAdress})
      
      const stringData = _id.toString();
      console.log(stringData)
     const cheak= await UrlModel.findByIdAndDelete({"_id":_id.toString()})
     console.log(cheak)
      if(cheak){
        res.redirect(url);
      }
   }
   catch(err){

     res.redirect("http://localhost:3000");
   }
  }
);

module.exports={
    RedirectUrl
}