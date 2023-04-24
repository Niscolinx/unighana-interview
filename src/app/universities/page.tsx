'use client'

import Card, { CardProps } from '@/components/Card'
import Header from '@/components/Header'
import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const UNIVERSITIES = [
    {
        id: 1,
        title: 'University of Ghana',
        description:
            'The University of Ghana is a public university in Accra, Ghana. It is the oldest university in Ghana and the largest in the world. It is the only university in Ghana that is affiliated with the United Nations.',
        image: 'https://ik.imagekit.io/39awxerdi/unighana/uni3.webp?updatedAt=1682328769293',
        link: '/universities/:1',
        majors: 42,
    },
    {
        id: 2,
        title: 'University of Accra',
        description:
            'The University of Ghana is a public university in Accra, Ghana. It is the oldest university in Ghana and the largest in the world. It is the only university in Ghana that is affiliated with the United Nations.',
        image: 'https://ik.imagekit.io/39awxerdi/unighana/uni2.webp?updatedAt=1682328768612',
        link: '/universities/:2',
        majors: 22,
    },
    {
        id: 3,
        title: 'University of Ashanti',
        description:
            'The University of Ghana is a public university in Accra, Ghana. It is the oldest university in Ghana and the largest in the world. It is the only university in Ghana that is affiliated with the United Nations.',
        image: 'https://ik.imagekit.io/39awxerdi/unighana/uni4.webp?updatedAt=1682328769289',
        link: '/universities/:3',
        majors: 17,
    },
    {
        id: 4,
        title: 'University of Bono',
        description:
            'The University of Ghana is a public university in Accra, Ghana. It is the oldest university in Ghana and the largest in the world. It is the only university in Ghana that is affiliated with the United Nations.',
        image: 'https://ik.imagekit.io/39awxerdi/unighana/uni1.webp?updatedAt=1682328766184',
        link: '/universities/:4',
        majors: 38,
    },
] satisfies CardProps[]

function Universities() {
    const [search, setSearch] = useState('')
    const [universities, setUniversities] = useState<CardProps[]>(UNIVERSITIES)

    const filterUniversities = (search: string) =>
        UNIVERSITIES.filter((uni) =>
            uni.title.toLowerCase().includes(search.toLowerCase())
        )

    React.useEffect(() => {
        if (search) {
            setUniversities(filterUniversities(search))
        } else {
            setUniversities(UNIVERSITIES)
        }
    }, [search])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSearch(value)
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
                        className='  border-none p-3 pr-2 pl-12 outline-none w-full rounded-3xl'
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
