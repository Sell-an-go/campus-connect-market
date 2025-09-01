import jwt from 'jsonwebtoken';

export const createToken = (res, email, username) => {
    const token = jwt.sign({email, username}, process.env.JWT_SECRET, {expiresIn : "1h"});
    res.cookie("token", token, {
        httpOnly: true,
        secure: false,   
        sameSite: "lax",
        maxAge: 3600000,
        path: "/"
    });
}

export const verifyToken = (req) => {
    if (req.cookies?.token == "" || req.cookies?.token == undefined) return {result: false};
    const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    console.log("auth.controller------ : ", data);
    return data;
}
