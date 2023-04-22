'use client'

import Header from '@/components/Header'
import Hero from '@/components/home/Hero'

export default function Home() {
    return (
        <div>
            <Header />
            <main className='px-4 lg:px-20 h-screen'>
                <Hero />
            </main>
        </div>
    )
}
