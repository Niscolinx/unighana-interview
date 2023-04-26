'use client'

import Input from '@/components/Input'
import useAxios from '@/hooks/useAxios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

const Login = () => {
    const router = useRouter()
    const axiosInstance = useAxios()

    interface Inputs {
        email: string
        password: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors: formErrors },
    } = useForm<Inputs>()

    type ResponseMessage = {
        className: string
        displayMessage: string
    }

    const [responseMessage, setResponseMessage] =
        useState<ResponseMessage | null>(null)

 

    const postRegister = (data: Inputs) => {
        return axiosInstance({
            url: 'auth/login',
            method: 'post',
            data,
        })
    }

    const { mutate, isLoading } = useMutation(['login'], postRegister, {
        onSuccess: (res: any) => {
            console.log({ res })
            setResponseMessage({
                className: 'text-green-600',
                displayMessage: 'Registration Successful',
            })

            router.push('/dashboard')

            localStorage.setItem('user', JSON.stringify(res))
        },
        onError: (err: any) => {
            console.log({ err })
            setResponseMessage({
                className: 'text-red-600',
                displayMessage: err?.response?.data.message,
            })
        },
    })

    const onSubmit = handleSubmit((data) => {
        setResponseMessage(null)
        console.log('mutate', data)

        mutate(data)
    })

    const formInputs = [
        {
            name: 'Email address',
            label: 'email',
            type: 'email',
        },
        {
            label: 'password',
            type: 'password',
        },
    ]

    return (
        <main className='grid place-items-center h-screen'>
            <div className='grid'>
                <h1 className='text-[2rem] font-medium'>Welcome to Unighana</h1>
                {responseMessage?.displayMessage && (
                    <p className='text-center'>
                        <span className={responseMessage?.className}>
                            {responseMessage?.displayMessage}
                        </span>
                    </p>
                )}

                <form onSubmit={onSubmit} className='grid gap-4 mt-12 '>
                    <>
                        {formInputs.map((input, idx) => {
                            const { label, type, name } = input
                            return (
                                <Input
                                    key={idx + label}
                                    label={label}
                                    name={name}
                                    register={register}
                                    formErrors={formErrors}
                                    type={type}
                                />
                            )
                        })}

                        <button className=' btn-blue mt-10 justify-self-center'>
                            {isLoading ? 'Loading...' : 'Login'}
                        </button>
                    </>
                </form>
            </div>
        </main>
    )
}

export default Login
