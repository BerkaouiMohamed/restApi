const bcrypt=require('bcryptjs')

module.exports=(hash,password)=>{ 

return bcrypt.compareSync(password,hash)
}