import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    condition:{
        type:String,
        required:true
    },
    image_urls:{
        type:String,
        required:true
    },
    owner_id:{
        type:String,
        required:true
    },
    college_id:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

const product = mongoose.model("Product",productSchema)
export default product