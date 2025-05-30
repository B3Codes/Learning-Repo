const { createHmac , randomBytes} = require('crypto');
const { Schema, model } = require('mongoose');
const { createTokenForUser } = require('../services/authentication');

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    salt: {
      type:String,
    }, 
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      default: "/images/default.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {timestamps: true}
);

userSchema.pre(('save'), function(next){
  const user = this;


  if(!user.isModified('password')) return next();

  // hash the password - using the salt (crypto)
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac('sha256', salt).update(user.password).digest('hex');
  this.salt = salt;
  this.password = hashedPassword;

  next();
})

// userSchema.static('matchPassword', async function(email, password) {
//   const user = await this.findOne({email});
//   console.log(user);

//   if(!user) throw new Error('User not found');

//   const salt = user.salt;
//   const hashedPassword = user.password;

//   const userProvidedHash = createHmac('sha256', salt).update(password).digest('hex');
//   if(userProvidedHash !== hashedPassword) throw new Error('Password not matched');

//   return user;
// })

// Authentication using JWT
userSchema.static('matchPasswordAndGenerateToken', async function(email, password) {
  const user = await this.findOne({email});
  console.log(user);

  if(!user) throw new Error('User not found');

  const salt = user.salt;
  const hashedPassword = user.password;

  const userProvidedHash = createHmac('sha256', salt).update(password).digest('hex');
  if(userProvidedHash !== hashedPassword) throw new Error('Password not matched');

  const token = createTokenForUser(user);
  return token;
})

const User = model('user', userSchema);

module.exports = User;