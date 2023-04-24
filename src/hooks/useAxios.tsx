import { useEffect } from 'react'
import axios from 'axios'
import { getToken } from '@/components/token'

function useAxios() {
    const axiosInstance = axios.create({})

    useEffect(() => {
        axiosInstance.interceptors.request.use(
            (config) => {
                const token = getToken()
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`
                }
                return config
            },
            (error) => Promise.reject(error)
        )

        axiosInstance.interceptors.response.use(
            (response) => response.data,
            (error) => Promise.reject(error)
        )
    }, [axiosInstance])

    return axiosInstance
}

export default useAxios
