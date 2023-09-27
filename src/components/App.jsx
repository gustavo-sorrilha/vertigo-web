import React from 'react';
import logoTime1 from '../assets/keyd.png'; 
import logoTime2 from '../assets/intz.png';
import logoTime3 from '../assets/pain.png';
import logoTime4 from '../assets/loud.png';
import logoTime5 from '../assets/losgrandes.png';
import logoTime6 from '../assets/kabum.png';

const partidas = [
  {
    nome: 'CBLOL',
    data: 'Outubro 15, 14:00',
    times: [
      { nome: 'Time 1', logo: logoTime1, odd: '2.00' },
      { nome: 'Time 2', logo: logoTime2, odd: '3.00' },
    ],
  },
  {
    nome: 'CBLOL',
    data: 'Outubro 14, 15:30',
    times: [
      { nome: 'Time 1', logo: logoTime3, odd: '2.50' },
      { nome: 'Time 2', logo: logoTime4, odd: '3.20' },
    ],
  },
  {
    nome: 'CBLOL',
    data: 'Outubro 17, 17:00',
    times: [
      { nome: 'Time 1', logo: logoTime5, odd: '2.80' },
      { nome: 'Time 2', logo: logoTime6, odd: '3.50' },
    ],
  },
];

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
     <div className="w-11/12 m-auto">
      <h1 className="text-2xl font-bold mb-4 text-black mt-4">Próximas Partidas</h1>
      <div className="w-1101 h-294 flex-shrink-0">
        <div className="grid grid-cols-3 gap-4">
          {partidas.map((partida, index) => (
            <div
              key={index}
              className="w-1101 h-294 flex-shrink-0 border-radius-8 bg-black p-4"
            >
              <div className="text-white">{partida.nome}</div>
              <div className="text-white">{partida.data}</div>
              <div className="flex justify-center items-center gap-16">
                {partida.times.map((time, timeIndex) => (
                  <div
                    key={timeIndex}
                    className="flex-1 flex-shrink-0 border-radius-4 bg-purple-900 p-2"
                  >
                    <div className="text-white">{time.nome}</div>
                    <img
                      src={time.logo}
                      alt={`Logo ${time.nome}`}
                      className="w-20 h-20 mx-auto"
                    />
                    <button className="text-white">Odd: {time.odd}</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      
      <div className="relative inline-block">
        <button className="w-220 h-36 px-0 flex-shrink-0 border-radius-8 bg-blue-500 text-white flex items-center justify-between">
          <span style={{ color: '#53F', padding: '8px 16px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>LOUD</span>
          <svg xmlns="http://www.w3.org/2000/svg" classNameName="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
            <path d="M10 12l-6-6h12z" />
          </svg>
        </button>
      </div>

      <div className="w-300 h-165.487 flex-shrink-0 relative">
        <div className="bg-#369FFF rounded-tl-2xl rounded-tr-2xl flex items-center justify-between p-4">
          <div className="w-12 h-12 bg-#369FFF rounded-full flex items-center justify-center shadow-md">
            <div className="w-8 h-8 bg-white rounded-full text-center text-xs">
              75%
            </div>
          </div>
          <div className="text-white">Over de Mapas</div>
        </div>
        <div className="bg-#369FFF rounded-bl-2xl rounded-br-2xl p-4">
          <img
            src="/caminho-da-imagem-do-mapa.png" // Substitua pelo caminho da imagem do mapa
            alt="Mapa do League of Legends"
            className="w-12 h-12 float-right"
          />
        </div>
      </div>

      <div style={{ width: '300px', height: '165px', flexShrink: 0, borderRadius: '20px', background: '#8AC53E', boxShadow: '0px 10px 30px 0px rgba(138, 197, 62, 0.40)', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <div style={{ width: '72px', height: '72px', flexShrink: 0, borderRadius: '50%', background: '#fff', textAlign: 'center', lineHeight: '72px', fontSize: '24px' }}>60%</div>
        <div style={{ position: 'absolute', top: '10px', left: '10px', color: '#fff', fontWeight: 'bold' }}>Under de Baron</div>
        <img src="caminho-da-imagem-do-baron.png" alt="Baron do LoL" style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: '10px', right: '10px' }} />
      </div>
    </div>
  );
}
