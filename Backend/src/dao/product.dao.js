import product from "../models/product.model.js"

export const saveProduct = async(title,description,price,category,
    condition,image_urls, owner_id, college_id,status,location)=>{
        try{
            const newProduct = new product({
                title,
                description,
                price,
                category,
                condition,
                owner_id,
                image_urls,
                college_id,
                status,
                location
            })
            await newProduct.save()
            return newProduct
        }
        catch(error){
            throw Error(error)
        }
}