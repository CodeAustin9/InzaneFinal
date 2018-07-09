var bcrypt = require("bcrypt-nodejs");
var User = require("../models/user");


function createUser(email, password, done){
    User.findOne({email: email}).then(user=>{
        if(!user){
            bcrypt.genSalt(10, (err, res)=>{
                if(err){
                    return done(err)
                }
                bcrypt.hash(password,res, null, function(err, hash){
                    var user=new User({email: email, password: hash})
                    user.save().then(doc=>done(null, doc))
       
                })
            })
        }else{
            done( {
                message: "User already exists."
            })
        }
    })

}

module.exports=createUser;