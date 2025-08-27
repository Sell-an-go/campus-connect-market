import {v2 as cloudinary} from "cloudinary";

const cloudinary_config = ()=>{
    cloudinary.config({
        cloud_name:'dysvkr7x0',
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
    });
}

export default cloudinary_config;