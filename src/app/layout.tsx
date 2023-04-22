import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
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
            <body className={lato.className}>{children}</body>
        </html>
    )
}
