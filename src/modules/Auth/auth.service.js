import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Users } from "../../users/users.model.js";
export const registerService = async (data) => {
    const encryptedPassword = await bcrypt.hash(data.password, 10)
    const result = await Users.insertOne({
        name: data.name,
        email: data.email,
        password: encryptedPassword


    })
    return result
}
export const loginService = async (data) => {
    const user = await Users.findOne({
        email: data.email,

    });

    if (!user) {
        return null
    }


    else {
        const isCorrectPassword = await bcrypt.compare(data.password, user.password)
        
        if (isCorrectPassword) {
            const token = jwt.sign({ userId: user._id },"djlaksnfsdknfoi3u490lkfsdnfkjsdnfkj")
            delete user.password
            return {...user.toJSON(),token}
        }
        else {
            return null
        }
    }
}
