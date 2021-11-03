
import { NextFunction,Response,Request } from "express";

import User from "../models/user.model"

import bcryptjs from "bcrypt"
import sign from "../utils/signJWT"


const login = async ( req : Request,res : Response, next :NextFunction) => {

    let email;
    let password;
            // tslint:disable-next-line:no-console
    console.log( req.body );

    if(!req.body?.email || !req.body?.password){
        return res.status(400).json({
            message: "Email or password required"
        })
    }
    else {
       email = req.body.email;
       password = req.body.password;

    }


    const user = await User.findOne({
        email,
      }).exec()


        // tslint:disable-next-line:no-console
     console.log( user );


     if(!user)
        return res.status(400).json({
            message: "Email not found"
        })

      bcryptjs.compare(password,user.password, (error,result) => {
          if(error){
            return res.status(401).json({
                message: error.message,
                error
            })
          }else if(result){
            sign(user,(err,token)=>{
                if(err){
                    return res.status(500).json({
                        message: error.message,
                        error
                    })
                }else if (token){
                    return res.status(200).json({
                        message: "hay tfadhal aasba",
                        token,
                        user
                    })
                }
            })


          }else{
            return res.status(400).json({
                message: "Bad password"
            })
          }
      })

}



export default {login};