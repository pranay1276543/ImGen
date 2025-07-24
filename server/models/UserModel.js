import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name: {type: String, require:true},
    email:{type : String, require:true, unique:true},
    password: {type: String, require:true},
    creditBalance:{type: Number,default:5}
})

const userModel = mongoose.model.user || mongoose.model("user",userschema)


export default userModel