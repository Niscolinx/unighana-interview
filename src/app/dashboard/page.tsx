'use client'
import React, {useState, useEffect} from 'react'

function Dashboard() {
    const [user, setUser] = useState('')


    useEffect(() => {

        const getUser = localStorage.getItem('user')
        if(getUser){

            const user_detail = JSON.parse(getUser)
            
            setUser(user_detail)
        }

    }, [])

    return (
        <div className='grid place-items-center my-12'>

            <h1 className='text-2xl font-bold'></h1>
            <p className='font-medium'>Welcome to your dashboard</p>
        </div>
    )
}

export default Dashboard
