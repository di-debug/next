"use client"

import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation";
import axios from 'axios'
import { toast } from "react-hot-toast";


export default function LoginPage() {

  const router =  useRouter();
  const [user, setUser] =  React.useState({
    email: "",
    password : "",
  });

  const [buttonDisable, setButtonDisable] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      toast.success("Login Sucessful")
      router.push("/profile")
    } catch (error:any) {
      console.log("Login failed", error.message);
      toast.error(error.message)

    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    if (user.password.length > 0 && user.email.length > 0) {
      setButtonDisable(false)
    }else{
      setButtonDisable(true);
    }
  }, [user]);
  //  const handleSignupClick = () => {
  //   router.push("/signup");
  // };

  return(
    <div className="">
      <div className="flex justify-center items-center  text-[#010101]">
        <form className="relative justify-center items-center max-w-[300px] bg-[#f1f7fe] rounded-[16px] flex flex-col p-22 px-10 py-14 gap-10 text-center" action="">
          <span className="font-bold text-[2.6rem]">{loading ? "Processing" : "Login"}</span>
          <span className="text-base text-gray-600">Create a free account with your email.</span>
          <div className="overflow-hidden rounded-lg  my-4 w-full">

            {/* Email */}
            <input 
            className="bg-transparent border-0 outline-none h-10 w-full border-b bg-white border-gray-300 text-sm p-4 "
            id="email"
            type="text"
            value={user.email} 
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"/>

            {/* Password */}
            <input
            className="bg-transparent border-0 outline-none h-10 w-full border-b bg-white border-gray-300 text-sm p-4"
            id="password"
            type="text"
            value={user.password} 
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"/>
            <button onClick={onLogin} className="bg-blue-600 text-white border-0 rounded-2xl px-[35px] mt-[1em] py-2 text-base font-semibold cursor-pointer transition-colors duration-300 ease-linear hover:bg-blue-500">Log In</button>
          </div>
        </form>

        <div className="p-4 text-xs bg-blue-200 shadow-md">
          <p>Create an account? <Link className="font-bold text-blue-600 transition-colors duration-300 ease-linear" href="/signup">Visit Signup Here</Link> </p>
        </div>
    </div>
  </div>
      
  )
}