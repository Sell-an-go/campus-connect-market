import bcrypt from 'bcrypt';
import usermodel from '../models/user.model.js';

export const encryptPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
    return hash;
}

export const verifyPassword = async (email, password) => {
    const user = await usermodel.findOne({email});
    if(user == null) return {result: false};
    const result = await bcrypt.compare(password, user.password);
    if(result == true) {
        return user;
    }
    else {
        return {result: false}
    }
}


