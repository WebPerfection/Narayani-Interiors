const express=require("express")
const RedirectUrl=express.Router()
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const {UrlModel}=require("../Model/UrlModel")
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
// RedirectUrl.post("/posturl",async(req,res)=>{
  
//   try{
//     const data=new UrlModel({"url":"/"})
//     await data.save()
//     res.send("success")
//   }
//   catch(err){
//     console.log(err)
//   }
// })
RedirectUrl.patch("/update",async(req,res)=>{
  const payload=req.body
  try{
     const data=await UrlModel.findByIdAndUpdate({"_id":"646d183a4d8c99c26c3f5b23"},payload)
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
      const {url}=await UrlModel.findOne({"_id":"646d183a4d8c99c26c3f5b23"})
      res.redirect(url);
   }
   catch{
     res.redirect("http://localhost:3000");
   }
  }
);

module.exports={
    RedirectUrl
}