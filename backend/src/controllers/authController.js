import User from "../models/User.js";
import bcrypt, { compare } from "bcryptjs";
import { createAccessToken } from "../utils/jwt.js";
export async function login (req, res) {
    const {email, password} = req.body; 
    try {
        const userFound = await User.findOne({email});
        if(!userFound) return res.status(400).json({message: "User not found"});

        const isMatch = password === userFound.password;
        if (!isMatch) return res.status(400).json({message: "Incorrect Password"}); 

        const token = await createAccessToken({id: userFound._id});
        res.cookie("token", token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        }); 
        console.log("succesfully logged in")

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}   

export async function logout (req, res) {
    res.cookie("token", "", {expires: new Date(0)}); 
    return res.sendStatus(200);
}

