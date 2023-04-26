'use client'

import Image from 'next/image'
import { VscLocation } from 'react-icons/vsc'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import { IoLibrarySharp } from 'react-icons/io5'

export interface CardProps {
    id: number
    title: string
    description: string
    imageUrl: string
    majors: number
    isDetail?: boolean
}

function Card({
    title,
    description,
    imageUrl,
    majors,
    id,
    isDetail = true,
}: CardProps) {
    console.log({ imageUrl })
    return (
        <div className=' gap-2 shadow-lg w-full overflow-hidden max-w-[60rem] mx-auto'>
            <img
                width={250}
                height={250}
                sizes='(min-width: 768px) 200px, 100vw'
                src={`${imageUrl}`}
                alt={title}
                className='w-full rounded-tr-lg rounded-tl-lg'
            />

            <div className='p-4 grid gap-8 my-4 md:my-0'>
                <div>
                    <h2 className='text-2xl font-bold capitalize'>{title}</h2>
                    <div className='p-2 font-medium items-center md:justify-between md:flex '>
                        <p className='flex items-center gap-2'>
                            <VscLocation className='text-primary' />
                            Accra, Ghana
                        </p>
                        <p className='flex items-center gap-2'>
                            <IoLibrarySharp className='text-primary' />
                            {majors}
                        </p>
                    </div>
                    <p className='font-light'>{description}</p>
                </div>
                {isDetail && (
                    <div className='justify-self-center'>
                        <Link
                            className='btn-blue flex items-center gap-2 '
                            href={`universities/${id}`}
                            target='_blank'
                        >
                            Know More
                            <span>
                                <BsArrowRight />
                            </span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card
