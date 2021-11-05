import {  NextFunction,Response,Request } from "express";
import jwt from "jsonwebtoken";

const authorizationMiddelware = ( req : Request,res : Response, next :NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];


    if(token){
        jwt.verify(token,"secret",(error,decode)=>{
            if(error){
                return res.status(404).json({
                    message: error.message,
                    error
                });
            }else{
                res.locals.jwt = decode;
            }
            next();

        })
    }else{

        return res.status(401).json({
            message: "Access Denied"
        })
    }

}

export default authorizationMiddelware;