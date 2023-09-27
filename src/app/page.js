import React from 'react';
import { Sidebar, Header, Container } from '@/components';
import App from '../components/App'; // Atualize o caminho do arquivo App.jsx conforme necessário

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />
        <Container>
          <App />
        </Container>
      </div>
    </main>
  );
}





