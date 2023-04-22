
"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

const lists = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Universities',
        href: '/',
    },
    {
        title: 'Majors',
        href: '/',
    },
]

function Header() {
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    const closeDialog = () => {
        if (dialogRef.current) {
            console.log('current')
            dialogRef.current.close()
        }
    }

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal()
        }
    }
    return (
        <>
            <dialog className='dialog' ref={dialogRef}>
                <section className='grid place-content-center w-full h-[100vh]'>
                    <IoMdClose
                        className='absolute right-4 top-4 text-[2rem] cursor-pointer'
                        onClick={closeDialog}
                    />

                    <ul>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                    </ul>
                </section>
            </dialog>

            <div className='flex justify-between items-center px-8 py-4'>
                <p className='font-bold text-2xl'>UniGhana</p>

                <ul className=' gap-5 items-center font-medium hidden lg:flex'>
                    {lists.map(({ title, href }, index) => (
                        <li key={index} className='hover:text-primary'>
                            <Link
                                href={href}
                                className='hover:text-primary text-lg '
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className='btn-blue hidden lg:flex'>Login</button>

                <button
                    className='flex lg:hidden bg-white w-10 h-10 rounded-md items-center justify-center shadow-lg'
                    onClick={openDialog}
                >
                    <AiOutlineMenu className='text-primary w-5 h-5' />
                </button>
            </div>
        </>
    )
}

export default Header
