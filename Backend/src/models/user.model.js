import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    }
});

const userdata = mongoose.model("User", userSchema);
export default userdata;
