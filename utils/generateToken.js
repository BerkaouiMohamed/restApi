const jwt=require('jsonwebtoken')


module.exports=(data)=>{
    return jwt.sign(data,process.env.JWT_KEY,{expiresIn:"1h"})
}