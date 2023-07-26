import mongoose from "mongoose";

const userSchema = () => ({
    userName : {
        type:String,
        require : [true, "Please Provide User Name"],
        unique: true,
    },

    userEmail : {
        type:String,
        require : [true, "Please Provide User email"],
        unique: true,
    },

    password : {
        type:String,
        require : [true, "Please Provide User Password"],
    },

    isVerified:{
        type:Boolean,
        default:false,
    },

    isAdmin:{
        type:Boolean,
        default:false,
    },

    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,

})


const User = mongoose.model.users || mongoose.model("user", userSchema);

export default User;