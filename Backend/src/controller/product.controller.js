import { imageUpload } from "./imageupload.controller.js"
import { saveProduct } from "../dao/product.dao.js"

export const productDetails = async(req,res)=>{
    const {title,description,price,category,condition
        ,college_id,status,location} = req.body
    console.log("Product-----", req.user);
    const image_urls = await imageUpload(req.file.buffer)

    const product = await saveProduct(title,description,price,category,
                    condition,image_urls, req.user._id, college_id,status,location)

    res.send("done")
}
