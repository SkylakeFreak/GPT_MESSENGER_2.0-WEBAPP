'use client'

import { signIn } from "next-auth/react"
import { title } from "process"



function Login() {
  return (
    <div className="bg-[#3b3c3c] h-screen flex flex-col items-center justify-center text-center">
        <button onClick={()=>signIn("google")} className="text-white text-3xl animate-pulse">Sign in to use Gpt Messenger 2.0</button>



    </div>
  )
}

export default Login