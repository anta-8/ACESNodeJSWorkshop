const jwt = require("jsonwebtoken")
const User = require("../model/userModel")
const promisify =require("util").promisify



const isAuthenticated =(req,res,next)=>{
    const token=req.cookie.token
    if(!token|| token === null){
        return res.send("please login") 
       
    }
    jwt.verify(token,process.env.SECRET,async(err,result)=>{
        if(err){
            res.send("invalid token")
        }else{
            const data = await User.findById(result,userId)
            if(!data){
                res.send("Invalid userID i the token")
            }else{
                res.userId = result.userId
                next()
            }
            console.log("valid token",token)
        }
    })
    next()
}
module.exports()


