import React from 'react';
import { Sidebar, Header, Container } from '@/components';
import Partidas from '@/components/App';
import { ButtonCustom, Mapa, Baron, Kills } from '@/components/App'; 


export default function Home() {
  return (
    <main className="flex min-h-screen relative"> {/* Adicione "relative" para posicionamento relativo */}
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />
        <Container>
          <div className="flex">
            <div className="flex-1">
              <Partidas />
              <ButtonCustom />
            </div>
            <div className="flex-1">
              <Mapa />
              <Baron />
            </div>
            <div className="flex-1">
              <Kills />
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}







