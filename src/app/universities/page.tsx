'use client'

import Card, { CardProps } from '@/components/Card'
import Header from '@/components/Header'
import useAxios from '@/hooks/useAxios'
import React, { ChangeEvent, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useQuery } from '@tanstack/react-query'

function Universities() {
    const [search, setSearch] = useState('')
    const [universities, setUniversities] = useState<CardProps[]>([])

    const axiosInstance = useAxios()
    const getRequest = () => {
        return axiosInstance({
            url: 'university/all',
        })
    }

    const { isLoading } = useQuery(['universities'], getRequest, {
        onSuccess: (res: any) => {

            setUniversities(res)
        },
        onError: (err: any) => {
            console.log({ err })
        },
    })

    React.useEffect(() => {
        const filterUniversities = (search: string) =>
            [...universities].filter((uni) =>
                uni.title.toLowerCase().includes(search.toLowerCase())
            )

        if (search) {
            setUniversities(filterUniversities(search))
        } else {
            setUniversities((prev) => prev)
        }
    }, [search, universities])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSearch(value)
    }

    if (isLoading) {
        return <p className='p-8 text-center'>Loading...</p>
    }

    return (
        <>
            <Header />

            <div className='mt-10 px-4 md:px-8 md:grid gap-10'>
                <section className='grid gap-2 py-4'>
                    <h3 className='relative flex items-center gap-2 uppercase font-bold text-lg'>
                        <span className=' w-14 h-[2px] bg-primary hidden md:flex'>
                            &nbsp;
                        </span>
                        <span className='text-primary tracking-wider font-clamp-md'>
                            Explore our top universities
                        </span>
                    </h3>

                    <h1 className='text-xl md:text-3xl font-bold capitalize'>
                        Discover a world of academic excellence with our
                        carefully curated top universities
                    </h1>
                </section>
                <section className='relative flex items-center justify-center sm:w-[30rem] sm:mx-auto'>
                    <input
                        type='text'
                        className=' border p-3 pr-2 pl-12 outline-none w-full rounded-3xl'
                        placeholder='Search'
                        value={search}
                        onChange={handleSearch}
                    />
                    <IoSearchOutline className='absolute left-6' />
                </section>
                <section className='md:grid gap-10 md:grid-cols-30rem my-10 md:my-0'>
                    {universities.map((uni) => (
                        <Card key={uni.id} {...uni} />
                    ))}
                </section>
            </div>
        </>
    )
}

export default Universities
