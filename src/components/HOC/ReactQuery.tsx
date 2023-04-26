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
        </QueryClientProvider>
    )
}

export default ReactQueryHOC
