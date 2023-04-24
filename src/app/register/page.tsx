'use client'

import Input from '@/components/Input'
import useAxios from '@/hooks/useAxios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { AxiosResponse } from 'axios'

const Register = () => {
    const router = useRouter
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

    // watch((values) => {
    //     console.log({ values })
    // })

    const axiosInstance = useAxios()
    const postRegister = (data: Inputs) => {
        const user = {
            user: data.email,
            password: data.password,
        }

        return axiosInstance({
            url: '/register',
            method: 'post',
            data: user,
        })
    }
    const { mutate } = useSWR('register', postRegister, {
        revalidateOnMount: false,
        errorRetryInterval: 0,
        shouldRetryOnError: false,

        onSuccess: (res) => {
            setResponseMessage({
                className: 'text-green-600',
                displayMessage: 'Registration Successful',
            })
            const token = res.data.token

            router().push('/dashboard')
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
        mutate(data as unknown as AxiosResponse<Inputs>)
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
                            Register
                        </button>
                    </>
                </form>
            </div>
        </main>
    )
}

export default Register
