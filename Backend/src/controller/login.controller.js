import { verifyPassword } from './passwordEncryption.controller.js';
import { createToken } from './auth.controller.js';

export const findUser = async(req, res) => {
    try {
        let { email, password } = req.body;
        console.log(email, password);
        let finded = await verifyPassword(email, password);
        if(finded == undefined || finded.result == false) {
            console.log("Inside-FindUser---", finded.result)
            return res.json({result: false});
        }
        else {
            req.user = finded;
            console.log("Inside login.controller ", req.user);
            console.log("FINDED.NAME ======", finded.name);
            createToken(res, email, finded.name);
            res.json({result: true});
        }
    }
    catch(err) {
        console.log("ERROR in finding user", err);
    }
}
