import { saveData } from "../dao/user.dao.js";
import { encryptPassword }  from './passwordEncryption.controller.js';
import { existence } from "./userExist.js";
import { createToken } from "./auth.controller.js";

const createUser = async(req, res) => {
    const { email, password, username, contactNo } = req.body;
    const isExist = await existence(req, email);
    if(isExist == true) {
        return res.send("User Exists!");
    }
    else {
        console.log(email, password, username, contactNo);
        const encryptedPassword = await encryptPassword(password);
        await saveData(email, encryptedPassword, username, contactNo);
        createToken(res, email, username);
        return res.redirect("/");
    }
}

export default createUser;