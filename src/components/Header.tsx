'use client'

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
        href: '/universities',
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
            <dialog className='dialog relative' ref={dialogRef}>
                <div className=' fixed top-0 left-0 bottom-0 min-w-full flex  '>
                    <div className='w-full md:min-w-[60%] relative py-4 px-8 bg-white'>
                        <div className='flex justify-between items-center border-b pb-4'>
                            <p className='font-bold text-2xl'>UniGhana</p>
                            <div className=' rounded-full p-1  border shadow-2xl bg-white cursor-pointer'>
                                <IoMdClose
                                    className=' text-[1.4rem] '
                                    onClick={closeDialog}
                                />
                            </div>
                        </div>

                        <ul className=' items-center font-medium grid mt-8 gap-2 text-xl'>
                            {lists.map(({ title, href }, index) => (
                                <li
                                    key={index}
                                    className='hover:text-primary border-b py-2'
                                >
                                    <Link href={href} className=''>
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='hidden md:flex w-full'>
                        <input
                            type='checkbox'
                            className=' invisible'
                            id='checkbox'
                            onChange={closeDialog}
                        />

                        <label
                            htmlFor='checkbox'
                            className='h-full w-full'
                        ></label>
                    </div>
                </div>
            </dialog>

            <div className='flex justify-between items-center px-8 py-4'>
                <p className='font-bold text-2xl'>UniGhana</p>

                <ul className=' gap-5 items-center font-medium hidden lg:flex'>
                    {lists.map(({ title, href }, index) => (
                        <li key={index}>
                            <Link
                                href={href}
                                className='hover:text-primary text-lg '
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href={'/login'} className='btn-blue hidden lg:flex'>
                    Login
                </Link>

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
