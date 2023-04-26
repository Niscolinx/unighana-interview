'use client'

import Card, { CardProps } from '@/components/Card'
import Header from '@/components/Header'
import useAxios from '@/hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import React, { ChangeEvent, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useParams } from 'next/navigation'

function University() {
    const [university, setUniversity] = useState<CardProps | null>(null)
    const params = useParams()

    const { id } = params

    const axiosInstance = useAxios()
    const getRequest = () => {
        return axiosInstance({
            url: `university/${id}`,
        })
    }

    const { isLoading } = useQuery(['university', id], getRequest, {
        onSuccess: (res: any) => {
            console.log({ res })

            setUniversity(res)
        },
        onError: (err: any) => {
            console.log({ err })
        },
    })

    if (isLoading) {
        return <p className='p-8 text-center'>Loading...</p>
    }
    return (
        <>
            <Header />

            <div className='mt-10 px-4 md:px-8 md:grid gap-10'>
                <section className='md:grid gap-10 md:grid-cols-30rem my-10 md:my-0'>
                    {university && <Card {...university} isDetail={false} />}
                </section>
            </div>
        </>
    )
}

export default University
