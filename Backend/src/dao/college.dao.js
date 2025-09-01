import collegeModel from "../models/college.model.js";

export const saveCollege = async(college_id)=>{
    try{
        let college_as_id = college_id.split(" ").join("").toLowerCase()
        let newCollege = await collegeModel.findOne({id:college_as_id})
        console.log(college_as_id,newCollege)
        if(newCollege==undefined){
            newCollege = new collegeModel({
                id:college_as_id,
                name:college_id
            })
            await newCollege.save()
        }
    }
    catch(error){
        console.log(`Some Error During Saving the college_id ${error.message}`)
    }
}
