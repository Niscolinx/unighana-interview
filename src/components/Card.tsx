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
    image: string
    link: string
    majors: number
    isDetail?: boolean
}

function Card({ title, description, image, link, majors, isDetail = true }: CardProps) {
    return (
        <div className=' gap-2 shadow-lg w-full'>
            <Image
                width={250}
                height={250}
                sizes='(min-width: 768px) 400px, 100vw'
                src={image}
                alt={title}
                className='w-full'
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
                    <p className=' text-xl'>{description}</p>
                </div>
                {isDetail && (
                    <div className='justify-self-center'>
                        <Link
                            className='btn-blue flex items-center gap-2 '
                            href={link}
                            
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
