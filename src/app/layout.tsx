import './globals.css'
import { Urbanist  } from 'next/font/google'

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

export const metadata = {
    title: 'Unighana',
    description: 'Best place for university students',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={urbanist.className}>{children}</body>
        </html>
    )
}
