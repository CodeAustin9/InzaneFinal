// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
// module.exports = function (sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//         // The email cannot be null, and must be a proper email before creation
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true
//             }
//         },
//         // The password cannot be null
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     });
//     // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database

//     // Hooks are automatic methods that run during various phases of the User Model lifecycle
//     // In this case, before a User is created, we will automatically hash their password




// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var usernameSchema = new Schema({
  // headline, a string, must be entered
  email: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // summary, a string, must be entered
  password: {
    type: String,
    required: true
  },
 
  
});

// Create the Headline model using the headlineSchema
var User = mongoose.model("User", usernameSchema);
//Go to where you create a user and move code here;
//Tutorials on converting sequelize to mongoose
//look up hooks in mongoose;
User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});

// Export the Headline model
module.exports = User;
