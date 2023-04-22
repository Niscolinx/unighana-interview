'use client'

import Image from 'next/image'
import React from 'react'

function Hero() {
    const list = [
        'Excellence, innovation, inclusivity.',
        'Inspiring curiosity, shaping futures.',
        'Dedicated to advancing knowledge and changing lives.',
    ]

    return (
        <div className='relative grid mt-[5rem] lg:mt-0 lg:grid-cols-2 h-full items-center'>
            <section className='py-10 relative mt-[-6rem] transition-all moveInLeft'>
                <Image
                    src={'/assets/shape-1.png'}
                    priority
                    width={100}
                    height={100}
                    className='absolute left-[-15%] top-[-20%] z-[-1]'
                    style={{
                        objectFit: 'cover',
                    }}
                    alt=''
                />
                <div className='grid gap-2 py-4'>
                    <h3 className='relative flex items-center gap-2 uppercase font-bold text-lg'>
                        <span className=' w-14 h-[2px] bg-primary '>
                            &nbsp;
                        </span>
                        <span className='text-primary tracking-wider font-clamp-md'>
                            Better Learning future with us
                        </span>
                    </h3>

                    <h1 className='text-5xl font-bold font-clamp'>
                        Committed To Learn Excellence In Education
                    </h1>
                </div>

                <div>
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className='text-gray-500 flex items-center gap-4 py-1'
                        >
                            <p className='w-2 h-2 rounded-full flex shadow '>
                                <span className='bg-primary rounded-full w-full h-full outline outline-white outline-offset-2 '>
                                    &nbsp;
                                </span>
                            </p>

                            <p>{item}</p>
                        </div>
                    ))}
                </div>

                <button className='btn-blue mt-8'>Get Started Today</button>
                <Image
                    src={'/assets/arrow.webp'}
                    priority
                    width={150}
                    height={150}
                    className='absolute right-[20%] bottom-[-20%] z-[-1]'
                    style={{
                        objectFit: 'cover',
                    }}
                    alt=''
                />
            </section>

            <section className='relative transition-all moveInBottom'>
                <Image
                    src={'/assets/banner-01.png'}
                    priority
                    width={1000}
                    height={1000}
                    className='relative z-10'
                    style={{
                        objectFit: 'cover',
                    }}
                    alt=''
                />
                <Image
                    src={'/assets/blob.webp'}
                    priority
                    width={1000}
                    height={1000}
                    className='absolute top-0 right-0 z-[-1]'
                    style={{
                        objectFit: 'cover',
                    }}
                    alt=''
                />
            </section>
        </div>
    )
}

export default Hero
