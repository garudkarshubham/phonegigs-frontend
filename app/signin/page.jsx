'use client'

import { useEffect, useRef, useState } from "react"
import { Toaster, toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const inputRef = useRef()

  const signIn = async (event) => {
    event.preventDefault()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/auth/sign_in`, {method: 'POST', mode: 'cors', body: JSON.stringify({username: email, password: password}), headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
    
    const data = await res.json()

    if (res.ok) {
      localStorage.setItem('accessToken', data.accessToken)
      router.push('/')
    } else {
      toast.error(data.message)
    }
  }

  useEffect(() => {
    inputRef.current.focus()
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      router.push('/')
    }

  }, [inputRef, router])

  return (
<div className="min-h-screen flex justify-center items-center">
  <Toaster />

  <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
    <div>
      <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome</h1>
    </div>
    <form>
    <div className="space-y-4">
      <input  ref={inputRef} type="text" value={email} onChange={(event) => setEmail(event.target.value)}  placeholder="Email Addres" className="block text-sm py-3 px-4 focus:ring-2 focus:ring-chocolate/80 rounded-lg w-full border outline-none" />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="block text-sm py-3 px-4 focus:ring-2 focus:ring-chocolate/80 transition rounded-lg w-full border outline-none" />
    </div>
    <div className="text-center mt-6">
      <button type="submit" className="py-3 w-64 text-xl text-white bg-tomato rounded-2xl" onClick={(event) => signIn(event)}>Sign In</button>
    </div>
    </form>
  </div>
  </div>
  
  )
}

export default Signin
