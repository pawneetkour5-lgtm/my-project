import jwt from "jsonwebtoken"
import { Users } from "../../users/users.model.js"
import { Types } from "mongoose"
export const validateUser = (shouldBeAdmin = false) => async (req, res, next) => {
    console.log(req.headers);
    
    const bearerToken = req.headers["authorization"]
    if (!bearerToken) {
        return res.status(401).json({
            message: "Token not provided"
        })
    }
    const token = bearerToken.split(" ")[1]
    if (!token) {
        return res.status(401).json({
            message: "Token not provided"
        })
    }
    try {
        const result = jwt.verify(token, "djlaksnfsdknfoi3u490lkfsdnfkjsdnfkj")
        if (!result) {
            return res.status(401).json({
                message: "Token Invalid"
            })
        }
        else {
            if(!req.body){
                req.body={}
            }
            req.body["user"] = result.userId
            if (shouldBeAdmin) {
                const user = await Users.findById(new Types.ObjectId(result.userId));
                if(!user){
                    return res.status(401).json({
                        message: "Your are not admin"
                    })
                }
                if (user.role === "admin") {
                    next()
                }
                else {
                    return res.status(401).json({
                        message: "Your are not admin"
                    })
                }
            }
            else {
                next()
            }
        }
    }
    catch (error) {
        console.log(error);
        
        return res.status(401).json({
            message: "Token Invalid or Expired"
        })
    }

}