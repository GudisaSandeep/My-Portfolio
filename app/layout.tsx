import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import QuickActions from '@/components/QuickActions'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sandeep Gudisa — Generative AI Engineer',
  description:
    'Generative AI Engineer building Agentic AI systems, RAG applications and real-world AI products. Grand Finalist at Smart India Hackathon 2024. Founder of MonoSid AI Therapy Platform.',
  icons: {
    icon: [
      { url: '/sandeep_hero_main.png', type: 'image/png' },
    ],
    shortcut: '/sandeep_hero_main.png',
    apple: '/sandeep_hero_main.png',
  },
  openGraph: {
    title: 'Sandeep Gudisa — Generative AI Engineer',
    description:
      'AI Engineer • Builder • Problem Solver. Building intelligent systems that solve meaningful problems.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ScrollProgress />
        {children}
        <QuickActions />
      </body>
    </html>
  )
}
