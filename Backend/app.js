import express from 'express';
import { connectDB } from './src/config/mongo.config.js';
import dotenv from "dotenv";
import cloudinary_config from './src/config/cloudinary.config.js';
import { upload } from './src/middleware/storage.middleware.js';
import { getAllColleges, productDetails, productFilters, myItems } from './src/controller/product.controller.js';
import createUser from './src/controller/user.controller.js';
import { home } from './src/controller/homePage.controller.js'
import { findUser } from './src/controller/login.controller.js';
import cookieParser from 'cookie-parser';
import { verifyToken } from './src/controller/auth.controller.js';
import isLoggedIn from './src/middleware/verify.middleware.js';

dotenv.config("./.env")


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(cookieParser());


import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../Frontend/public")));


app.get("/", home); // Home Page

app.get('/loginVerify', (req, res) => {
    try {
        const data = verifyToken(req);
        if(data.result == false) return res.json({result: "User not verified!"})
        else return res.json(data);
    }
    catch(err) {
        if (err.name === "TokenExpiredError") {
            console.log("Token expired!");
          } else {
            console.log("Invalid token!");
        }
    }
});


app.post('/login', findUser);   // Login


app.get('/logout', (req, res) => {
    console.log("app.js......", req.cookies);
    res.clearCookie("token","",{
        httpOnly: true,
        secure: false,  
        sameSite: "lax",
        path: "/"
    }); 
    return res.json({result: true});
});
        
app.post('/product/details', upload.single('image_urls'), isLoggedIn, productDetails)   // add a product

app.post("/create_account", createUser);    // create a new account

app.get('/product/details',(req,res)=>{
    res.sendFile('/Users/himanshu/Desktop/JS/Projects/campus-connect-market/Frontend/public/pages/sell-item.html')
})

app.post('/product/details',upload.single('image_urls'),productDetails)
app.get('/getProduct',productFilters)
app.get('/getAllColleges',getAllColleges)
app.get("/myItems", isLoggedIn, myItems);  // Get Own Items 


app.listen(2000,() => {
    connectDB()
    cloudinary_config()
    console.log("Server 2000 is running.")
})

