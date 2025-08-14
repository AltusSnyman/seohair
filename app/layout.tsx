import type { Metadata } from 'next'
import '../src/index.css'

export const metadata: Metadata = {
  title: 'Hair By Melissa - Professional Hair Services',
  description: 'Premium hair salon services including cuts, colors, keratin treatments, and styling. Book your appointment with Melissa today.',
  keywords: 'hair salon, hair cuts, hair color, keratin treatment, professional styling, hair services',
  openGraph: {
    title: 'Hair By Melissa - Professional Hair Services',
    description: 'Premium hair salon services including cuts, colors, keratin treatments, and styling.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair By Melissa - Professional Hair Services',
    description: 'Premium hair salon services including cuts, colors, keratin treatments, and styling.',
  },
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}