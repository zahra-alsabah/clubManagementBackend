import jwt from "jsonwebtoken"
import User from "../interfaces/user.interface"

const sign = (user: User, callback: (error: Error | null, token: string | null) =>void) : void=> {
    const timeNow = new Date().getTime();
    const expireAt = timeNow + Number(60000) * 60 * 24;

    try{
        jwt.sign({
            email: user.email
        },"secret",{
            expiresIn: expireAt,
            algorithm: "HS256",
            issuer : "zahra"
        },(error,token) => {
            if(error){
                callback(error,null)
            }else if (token) {
                callback(null,token)
            }else{
                callback(null,null)
            }
        })
    }catch(error){
        callback(error,null)
    }

}

export default sign;