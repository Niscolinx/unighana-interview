import { useEffect } from 'react'
import axios from 'axios'

function useAxios() {
    const axiosInstance = axios.create({
        // baseURL: 'https://unighana-be-production.up.railway.app/',
        baseURL: 'https://unighana-be-production.up.railway.app/',
    })

    useEffect(() => {
        axiosInstance.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access_token')
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
