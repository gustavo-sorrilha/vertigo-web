import { Sidebar, Header, Container, Partidas, Mapa } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen"> 
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />

        <Container>
          <Partidas />
          <Mapa />
        </Container>
      </div>
    </main>
  );
}







