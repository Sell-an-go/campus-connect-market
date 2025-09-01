import userdata from '../models/user.model.js';

export const saveData = async(email, encryptedPassword, name, contactNo) => {
    const user = new userdata({
        email,
        password: encryptedPassword,
        name,
        contactNo
    });
    await user.save();
    return user;
}

