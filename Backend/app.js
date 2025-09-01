import express from 'express';
import { connectDB } from './src/config/mongo.config.js';
import dotenv from "dotenv";
import cloudinary_config from './src/config/cloudinary.config.js';
import { upload } from './src/middleware/storage.middleware.js';
import { getAllColleges, productDetails, productFilters } from './src/controller/product.controller.js';
dotenv.config("./.env")


const app = express()


app.use(express.static('../Frontend/public'));

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.sendFile('/Users/himanshu/Desktop/JS/Projects/campus-connect-market/Frontend/public/pages/index.html')
})


app.get('/product/details',(req,res)=>{
    res.sendFile('/Users/himanshu/Desktop/JS/Projects/campus-connect-market/Frontend/public/pages/sell-item.html')
})

app.post('/product/details',upload.single('image_urls'),productDetails)
app.get('/getProduct',productFilters)
app.get('/getAllColleges',getAllColleges)

app.listen(2000,()=>{
    connectDB()
    cloudinary_config()
    console.log("Server 2000 is running.")
})