import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
return (
    <div className='max-w-xl mx-auto p-3'>
        <h1 className='text-center text-2xl font-semibold text-slate-600 my-5'>Sign Up</h1>
        <form className='flex flex-col gap-4'>
            <input type="text" placeholder='Username' className='border p-3 rounded-lg' />
            <input type="text" placeholder='Email' className='border p-3 rounded-lg' />
            <input type="password" placeholder='Password' className='border p-3 rounded-lg' />
        <button className='bg-green-500 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            Sign Up
        </button>
        </form>
        <div className='flex gap-2 mt-5'>
            <p>Already have a account?</p>
            <Link to={'/login'}>
                <span className='text-blue-500'> Sign In</span>
            </Link>
        </div>
    </div>

)
}
