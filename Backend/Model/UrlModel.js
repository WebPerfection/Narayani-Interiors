const mongoose=require("mongoose")
const urlSchema=mongoose.Schema({
    url:{type:String}
})

const UrlModel=mongoose.model("url",urlSchema)
module.exports={
    UrlModel
}