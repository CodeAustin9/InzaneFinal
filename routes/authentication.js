// Requiring our models and passport as we've configured it
var passport = require("passport");
var router = require("express").Router();
var createUser = require("../authentication/createUser");

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

router.post("/login", passport.authenticate("local"), function (req, res){
    res.json({message: "You've successfully logged in!"})
})
router.post("/signup", function(req, res){
    var {email, password} = req.body
    createUser(email,password, function(err, user){
        if(err){
            res.sendStatus(400)
        }else{
            res.sendStatus(200)
        }
    })
})

module.exports=router;