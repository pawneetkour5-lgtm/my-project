import{loginService,registerService} from "./auth.service.js";




export const registerController= async(req,res)=>{
    const user = await registerService(req.body);
    return res.json({
        status:"ok",
        message:"user registered successfully",
        user
    })
}
export const loginController=async(req,res)=>{
    const result = await loginService(req.body)
    if(!result){
        res.status(401).json({
            message:"User not found or invalid password"
        })
    }
    else{
    return res.json(result)
}

}
