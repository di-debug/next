"use client"
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation";
import axios from 'axios'
import toast from "react-hot-toast"

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
      email: "",
      password: "",
      username: "",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/users/signup", user);
          console.log("Signup success", response.data);
          router.push("/login");
          
      } catch (error:any) {
          console.log("Signup failed", error.message);
          
          toast.error(error.message);
      }finally {
          setLoading(false);
      }
  }

  useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
          setButtonDisabled(false);
      } else {
          setButtonDisabled(true);
      }
  }, [user]);
  return(
      <div className="flex justify-center items-center text-[#010101]">
        <form className="relative justify-center items-center max-w-[400px] bg-[#f1f7fe] rounded-[16px] flex flex-col p-22 px-10 py-14 gap-10 text-center" action="">
          <span className="font-bold text-[2.6rem]">{loading ? "Processing" : "Sign Up"}</span>
          <span className="text-base text-gray-600">Create a free account with your email.</span>
          <div className="overflow-hidden rounded-lg  my-4 w-full">
            {/* UserName */}
            <input 
            className="bg-transparent border-0 outline-none  w-full border-b bg-white border-gray-300 text-sm p-4  "
            id="username"
            type="text"
            value={user.username} 
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"/>

            {/* Email */}
            <input 
            className="bg-transparent border-0 outline-none h-10 w-full border-b bg-white border-gray-300 text-sm p-4 "
            id="email"
            type="text"
            value={user.email} 
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"/>

            {/* Passowrd */}
            <input
            className="bg-transparent border-0 outline-none h-10 w-full border-b bg-white border-gray-300 text-sm p-4"
            id="password"
            type="text"
            value={user.password} 
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"/>
            <button onClick={onSignup} className="bg-blue-600 text-white border-0 rounded-2xl px-[35px] mt-[1em] py-2 text-base font-semibold cursor-pointer transition-colors duration-300 ease-linear hover:bg-blue-500">{buttonDisabled ? "No SignUp" : "SignUp"}</button>
          </div>
        </form>

        <div className="p-4 text-xs bg-blue-200 shadow-md">
          <p>Have an account? <Link className="font-bold text-blue-600 transition-colors duration-300 ease-linear" href="/login">Log in</Link> </p>
        </div>
      </div>
  )
}