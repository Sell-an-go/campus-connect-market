import userdata from "../models/user.model.js";

export const existence = async (req, email) => {
    let user = await userdata.findOne({email});
    if(user != undefined) {
        req.user = user;
        return true;
    }
    else {
        return false;
    }
}