import jwt from "jsonwebtoken";

const userAuth = async (req,res,next)=>{
    const {token} = req.headers;

    if(!token){
        res.json({success: false,message:"Not Authorized. Login Again"})
    }

    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)
        // console.log(tokenDecode.id)

        if(tokenDecode.id){
            req.user = { id: tokenDecode.id };
        }else{
            res.json({success: false,message:"Not Authorized. Login Again"})
        }

        next()
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default userAuth