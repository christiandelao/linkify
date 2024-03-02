import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
return (
    <header className='bg-[#fbdbc6] shadow-lg'>
        <div className='flex justify-between max-w-6xl mx-auto items-center p-3'>
            <div>
            <Link to={'/'}>
            <h1 className='text-3xl font-bold text-green-500'>Linkify</h1>
            </Link>
            </div>
                <ul className='flex gap-4'>
                    <Link to={'/'}>
                        <li className='hover:underline text-slate-700'>Home</li>
                    </Link>
                    <Link to={'/about'}>
                        <li className='hover:underline text-slate-700'>About</li>
                    </Link>
                    <Link to={'/sign-up'}>
                        <li className='hover:underline text-slate-700 '>Sign Up</li>
                    </Link>
                </ul>
        </div>
    </header>
)
}
