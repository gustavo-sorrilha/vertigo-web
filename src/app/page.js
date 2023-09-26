// Component import
import { Sidebar, Header } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between">
      <Sidebar />
      <Header />
    </main>
  )
}
