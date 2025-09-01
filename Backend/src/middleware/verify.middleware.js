import { verifyToken } from "../controller/auth.controller.js";
import userdata from "../models/user.model.js";

const isLoggedIn = async (req, res, next) => {
    try {
        const data = verifyToken(req);
        if(data == undefined || data.result == false) return res.send("ERROR")
        const user = await userdata.findOne({email: data.email});
        req.user = user;
        next();
    }
    catch(err) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

export default isLoggedIn;