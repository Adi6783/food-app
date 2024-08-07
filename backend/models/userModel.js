import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type:String, required:true, unique: true},
    password:{type:String, required:true},
   cartData:{type:Object, default:{}}
},{minimize: false})
//minimize:false statement is used to allow empty objects as default as well

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;