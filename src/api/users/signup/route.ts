import {connect} from "@/dbconfig/dbConfig"
import User from "@/models/userModel.js"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"


connect()


export async function POST(request:NextRequest) {
    try{
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody);


        // Check if user exists
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error: "User already exist"},
                {status:400})
        }

        // Hash Password

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        
        const newUser =new User({
            username,
            password: hashedPassword, 
            email
        })

        const savedUser = await newUser.save()
        console.log(savedUser);
        
        // send verification mail

        return NextResponse.json({
            message : "User Created Succesfully",
            success: true,
            savedUser
        })

    }catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}