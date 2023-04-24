'use client'

import Header from '@/components/Header'
import React, { useState, ChangeEvent } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

function Universities() {
    const [search, setSearch] = useState('')

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSearch(value)
    }
    return (
        <>
            <Header />

            <div className='grid'>
                <div className='relative flex items-center w-[45rem] mx-auto'>
                    <input
                        type='text'
                        className='  border-none p-3 pr-2 pl-12 outline-none w-full rounded-3xl'
                        placeholder='Search'
                        value={search}
                        onChange={handleSearch}
                    />
                    <IoSearchOutline className='absolute left-6' />
                </div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non
                iure laboriosam placeat amet facere! Recusandae quas quam natus
                laudantium, minima incidunt facere facilis excepturi fuga eius
                corporis autem quidem.
            </div>
        </>
    )
}

export default Universities
