import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
        id:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    }
)

const collegeModel = new mongoose.model('College',collegeSchema)
export default collegeModel