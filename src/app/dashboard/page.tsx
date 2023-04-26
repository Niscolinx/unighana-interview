'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Dashboard() {
    const router = useRouter()
    interface User {
        firstName: string
    }
    const [user, setUser] = useState<User>({
        firstName: '',
    })

    useEffect(() => {
        const getUser = localStorage.getItem('user')
        if (getUser) {
            const user_detail = JSON.parse(getUser)

            setUser(user_detail)
        }
    }, [])

    const goBack = () => {
        router.push('/universities')
    }

    

    return (
        <div className='grid place-items-center my-12 relative'>

            <h1 className='text-2xl font-bold'>Hello {user.firstName},</h1>
            <p className='font-medium'>Welcome to your dashboard</p>

            <button className='btn-blue mt-20' onClick={goBack}>Go back</button>
        </div>
    )
}

export default Dashboard
