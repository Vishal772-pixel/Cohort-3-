//Practice for writing a user logic 
const express = require("express")
import bycrpt from ("bycrpt")
import userModel from ("./models/user.models.js")

// Register
router.post =("/register",async(req,res))=>
try{

const( username, email,age,country,  password,confirm_password)
{
if(!username ||! password ||!age||!country||!confirm_password){
return
res.send(400).json({Message:"Enter all your credentials properly"})
}

const user_exists = User.findOne({email};{
if(user_exists){

return
res.send(409).json(Message:"User Already exist")}

if (password!=confirm_password){
return
res.send(400).json)({Message:"Password didn't matched"});


}

//If everything remains fine 
const new_user={
username,
email,
age,
country,
password,
confirm_password
}

