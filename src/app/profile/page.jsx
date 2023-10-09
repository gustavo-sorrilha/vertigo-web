import { Sidebar, Header, Container,Mapa} from '@/components';

export default function Profile() {
  return (
    <main className="flex min-h-screen"> 
    <Sidebar />
    
    <div className='flex flex-col flex-1'>
      <Header />

      <Container>
        <form action="" className="flex flex-col m-auto w-96 gap-4">
            <h1 className='text-center mb-3 text-xl text-black'>Altere os dados da sua conta</h1>
            <input type="text" className="bg-white p-3 border-b-4 rounded-sm" placeholder="Nome" />
            <input type="text" className="bg-white p-3 border-b-4 rounded-sm" placeholder="Email" />
            <input type="text" className="bg-white p-3 border-b-4 rounded-sm" placeholder="Senha" />
            <button type="submit" className="bg-purple-500 rounded p-3 mt-3 text-white">Salvar</button>
        </form>
      </Container>
    </div>
  </main>
  )
}
