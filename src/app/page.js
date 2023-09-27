// Component import
import { Sidebar, Header, Container } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />

      <div className='flex flex-col flex-1'>
        <Header />

        <Container>
          <h1>Teste</h1>
        </Container>
      </div>
    </main>
  )
}
