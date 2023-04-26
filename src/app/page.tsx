'use client'

import Header from '@/components/Header'
import Hero from '@/components/home/Hero'

export default function Home() {
    return (
        <div>
            <Header />
            <main
                className='px-4 py-5 lg:px-20 h-screen'
                style={{
                    background: `url('/assets/hero.webp')`,
                }}
            >
                <Hero />
            </main>
        </div>
    )
}
