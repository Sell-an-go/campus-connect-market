import express from 'express';
import { connectDB } from './src/config/mongo.config.js';
import dotenv from "dotenv";
import cloudinary_config from './src/config/cloudinary.config.js';
import { upload } from './src/middleware/storage.middleware.js';
import { productDetails } from './src/controller/product.controller.js';
dotenv.config("./.env")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/product/details',upload.single('image_urls'),productDetails)


app.listen(2000,()=>{
    connectDB()
    cloudinary_config()
    console.log("Server 2000 is running.")
})