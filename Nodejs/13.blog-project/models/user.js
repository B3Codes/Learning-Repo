const { createHmac , randomBytes} = require('crypto');
const { Schema, model } = require('mongoose');

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
      required: true,
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


  if(!user.isModified('password')) return;

  // hash the password - using the salt (crypto)
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac('sha256', salt).update(user.password).digest('hex');
  this.salt = salt;
  this.password = hashedPassword;
})

const User = model('user', userSchema);

module.exports = User;