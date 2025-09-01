import { imageUpload } from "./imageupload.controller.js"
import { saveProduct } from "../dao/product.dao.js"
import { saveCollege } from "../dao/college.dao.js"
import product from "../models/product.model.js"
import collegeModel from "../models/college.model.js"

export const productDetails = async(req,res)=>{
    const {title,description,price,category,condition
        ,college_id,status,location} = req.body

    const image_urls = await imageUpload(req.file.buffer)

    const product = await saveProduct(title,description,price,category,
                        condition,image_urls,college_id,status,location)
    const college = await saveCollege(college_id)
    res.redirect('/')
}

export const productFilters = async(req,res)=>{
    try{
        let {category,college} = req.query
        console.log(category,college)
        let products = []
        if(college == "All Colleges" && category=="all categories"){
        products = await product.find()
        }
        else if(college == "All Colleges"){
            products = await product.find({category:category})
        }
        else if(category=="all categories"){
            products = await product.find({college_id:college})
        }
        else{
            products = await product.find({category:category,college_id:college})
        }
        res.json(products)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

export const getAllColleges = async(req,res)=>{
    try{
        let colleges = await collegeModel.find()
        res.json(colleges)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}