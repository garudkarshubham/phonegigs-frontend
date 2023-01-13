'use client'

import { useState, useRef, useEffect } from "react"
import { Toaster, toast } from 'react-hot-toast';
import {useRouter} from 'next/navigation'
import Link from "next/link";

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const inputRef = useRef()

  const createAccount = async (event) => {
    event.preventDefault()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/auth/register`, {method: 'POST', mode: 'cors', body: JSON.stringify({username: email, password: password}), headers: {'Content-Type': 'application/json', 'Accept': 'application/json',}})

    if (res.ok) {
      router.push('/signin')
    } else {
      const data = await res.json()
      toast.error(data.message)
      setEmail('')
      setPassword('')
      inputRef.current.focus()
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
    <main className="min-h-screen flex justify-center items-center">
      <Toaster />

    <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
      <div>
        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
        <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an account to enjoy all the services without any ads for free!</p>
      </div>

      <form>
      <div className="space-y-4">
        <input ref={inputRef} type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email Address" className="block text-sm py-3 px-4 focus:ring-chocolate/80 focus:ring-2 rounded-lg w-full border outline-none" />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="block text-sm py-3 px-4 focus:ring-chocolate/80 focus:ring-2 transition rounded-lg w-full border outline-none" />
      </div>
      <div className="text-center mt-6">
        <button type="submit" className="py-3 w-64 text-xl text-white bg-tomato rounded-2xl" onClick={(event) => createAccount(event)}>Create Account</button>
        <p className="mt-4 text-sm">Already Have An Account? <Link className="underline" href="/signin">Sign In</Link></p>
      </div>
      </form>
    </div>
  </main>
  )
}

export default Register