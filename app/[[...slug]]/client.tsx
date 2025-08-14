'use client'

import dynamic from 'next/dynamic'

// Import the existing React app with SSR disabled
const App = dynamic(() => import('../../src/App'), { ssr: false })

export function ClientOnly() {
  return <App />
}