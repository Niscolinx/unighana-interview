import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <div className='flex justify-between items-center p-8'>
            <p className='font-bold text-2xl'>UniGhana</p>

            <ul className='flex gap-5 items-center font-medium'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>Universities</Link>
                </li>
            </ul>

            <button className='bg-color-primary text-white px-5 py-2 rounded-md'>
                Login
            </button>
        </div>
    )
}

export default Header
