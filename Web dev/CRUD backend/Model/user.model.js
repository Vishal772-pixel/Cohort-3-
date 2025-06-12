import mongoose from "mongoose";
import bcrypt from "bcrypt js";

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
  },
  password:{
    type:String,
    required:true,
  },
    phone:{
  type:String,
    required:false,
    },
  address:{
    type:String,
    city:String,
    state:String,
    postal code:String,
    country:String}
,
    role:{
  type:String,
      enum:["user","admin"],
      default:"user"},
  orders:[{
    type.mongoose.schema.Types.ObjectId,
  ref:"order"
}]
                                       {timestamps:true});
},


//Hash password before saving it 
userSchema.pre("save",async function(next){
  if(!this.isModified("password"))return next();
  this.password=await bcrypt.hash(this.password,10);next();});


//Method to Check password Validity 
user.Schema.methods.isPasswordCorrect=async function(password){
  return await bcrypt.compare(password,this.password);
};

//Methods to check if User is Admin
    userSchema.methods.isAdmin=function(){
      return this.role==="admin";
    };

      Export const User = mongoose(User,userSchema)
    
