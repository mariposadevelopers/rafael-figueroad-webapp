import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name :  {type: String, required: true,},
    email : {type: String, required: true},
    role : {type: String, enum: ["Teacher", "Student"], required: true},
});

const User = mongoose.model("User", userSchema);

export default User;