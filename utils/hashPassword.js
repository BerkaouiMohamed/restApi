const bcrypt=require('bcryptjs')
module.exports=(password)=>{
    const salt=bcrypt.genSaltSync(10)
    var hash=bcrypt.hashSync(password,salt)
    return hash
}