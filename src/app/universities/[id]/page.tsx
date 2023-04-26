'use client'

import Card from '@/components/Card'
import Header from '@/components/Header'
import React, { ChangeEvent, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

function University({ ...props }: any) {
    return (
        <>
            <Header />

            <div className='mt-10 px-4 md:px-8 md:grid gap-10'>
                <section className='md:grid gap-10 md:grid-cols-30rem my-10 md:my-0'>
                    <Card {...props} isDetail={false} />
                </section>
            </div>
        </>
    )
}

export default University
