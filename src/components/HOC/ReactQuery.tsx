'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


interface Props {
    children: React.ReactNode
}
const queryClient = new QueryClient()

function ReactQueryHOC({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    )
}

export default ReactQueryHOC
