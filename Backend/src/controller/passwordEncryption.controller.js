import bcrypt from 'bcrypt';
import usermodel from '../models/user.model.js';

export const encryptPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
    return hash;
}

export const verifyPassword = async (email, password) => {
    console.log(email, password);
    const user = await usermodel.findOne({email});
    console.log("Inside Verify Passowrd-----", user)
    if(user == null) return {result: false};
    const result = await bcrypt.compare(password, user.password);
    console.log("verification Status:........")
    if(result == true) {
        return user;
    }
    else {
        return {result: false}
    }
}


