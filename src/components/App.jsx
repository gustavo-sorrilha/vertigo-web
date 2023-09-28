import React from 'react';
import logoTime1 from '../assets/keyd.png'; 
import logoTime2 from '../assets/intz.png';
import logoTime3 from '../assets/pain.png';
import logoTime4 from '../assets/loud.png';
import logoTime5 from '../assets/losgrandes.png';
import logoTime6 from '../assets/kabum.png';
import logoTime7 from '../assets/liberty.png';
import logoTime8 from '../assets/fluxo.png';
import mapa from '../assets/mapa.png';
import baron from '../assets/baron.png';

const partidas = [
  {
    nome: 'CBLOL',
    data: 'Outubro 15, 14:00',
    times: [
      { nome: 'KEYD', logo: logoTime1, odd: '2.00' },
      { nome: 'INTZ', logo: logoTime2, odd: '3.00' },
    ],
  },
  {
    nome: 'CBLOL',
    data: 'Outubro 14, 15:30',
    times: [
      { nome: 'PAIN', logo: logoTime3, odd: '2.50' },
      { nome: 'LOUD', logo: logoTime4, odd: '1.60' },
    ],
  },
  {
    nome: 'CBLOL',
    data: 'Outubro 17, 17:00',
    times: [
      { nome: 'LOS GRANDES', logo: logoTime5, odd: '2.80' },
      { nome: 'KABUM', logo: logoTime6, odd: '3.50' },
    ],
  },
  {
    nome: 'CBLOL',
    data: 'Outubro 17, 18:00',
    times: [
      { nome: 'LIBERTY', logo: logoTime7, odd: '2.70' },
      { nome: 'FLUXO', logo: logoTime8, odd: '1.50' },
    ],
  },
];

export default function Partidas() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="w-11/12 m-auto">
          <h1 className="text-2xl font-bold mb-4 text-black mt-4">Próximas Partidas</h1>
          <div className="w-1101 h-294 flex-shrink-0">
            <div className="flex justify-center items-center gap-8">
              {partidas.map((partida, index) => (
                <div
                  key={index}
                  className="w-1101 h-294 flex-shrink-0 border-radius-8 bg-black p-4"
                >
                  <div className="flex justify-between mb-2">
                    <div className="text-white">{partida.nome}</div>
                    <div className="text-white">{partida.data}</div>
                  </div>
                  <div className="flex justify-center items-center gap-16">
                    {partida.times.map((time, timeIndex) => (
                      <div
                        key={timeIndex}
                        className="flex-1 flex-shrink-0 border-radius-4 bg-black p-2"
                      >
                        <img
                          src={time.logo}
                          alt={`Logo ${time.nome}`}
                          className="w-20 h-20 mx-auto"
                        />
                        <button className="odd-button"> Odd: {time.odd}</button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export function ButtonCustom(){
    return (
    <div className="relative inline-block">
          <button className="w-220 h-36 px-0 flex-shrink-0 border-radius-8 bg-blue-500 text-white flex items-start justify-start button-custom">
            <span style={{ color: '#53F', padding: '4px 8px', display: 'flex', alignItems: 'flex-start', gap: '1px' }}>LOUD</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
              <path d="M10 12l-6-6h12z" />
            </svg>
          </button>
        </div>
    );
};
export function Mapa(){
    return (
      
        <div className="flex flex-col">
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', width: '300px', height: '165px', flexShrink: 0, borderRadius: '20px', background: '#369FFF', boxShadow: '0px 10px 30px 0px rgba(138, 197, 62, 0.40)', margin: '10px' }}>
            <div style={{ color: '#fff', fontWeight: 'bold', position: 'absolute', top: '10px', left: '10px' }}>Over de Mapa</div>
            <div style={{ width: '72px', height: '72px', flexShrink: 0, borderRadius: '50%', background: '#fff', textAlign: 'center', lineHeight: '72px', fontSize: '24px', color: 'black', position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>75%</div>
            <img src={mapa} alt="Mapa do LoL" style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }} />
          </div>
        </div>
    );
};
export function Baron(){
    return (
      
        <div style={{ width: '300px', height: '165px', flexShrink: 0, borderRadius: '20px', background: '#8AC53E', boxShadow: '0px 10px 30px 0px rgba(138, 197, 62, 0.40)', position: 'relative', display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '10px' }}>
          <div style={{ color: '#fff', fontWeight: 'bold', position: 'absolute', top: '10px', left: '10px' }}>Under de Baron</div>
          <div style={{ width: '72px', height: '72px', flexShrink: 0, borderRadius: '50%', background: '#fff', textAlign: 'center', lineHeight: '72px', fontSize: '24px', color: 'black', position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>60%</div>
          <img src={baron} alt="Baron do LoL" style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }} />
        </div>
    );
};
export function Kills() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const boxStyle = {
    width: '180px',
    height: '183.433px',
    flexShrink: 0,
    borderRadius: '20px',
    opacity: '0.1',
    background: '#369FFF',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'relative', 
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: 'black', 
    position: 'absolute',
    top: '10px',
    left: '0',
    width: '100%',
  };

  const percentageStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: 'black',
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    width: '100%',
  };

  const labelStyle = {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-azure">
      <div style={containerStyle}>
        <div style={boxStyle}>
          <div style={textStyle}>Kill Over</div>
          <div style={percentageStyle}>70%</div>
        </div>
      </div>

      <div style={containerStyle}>
        <div style={boxStyle}>
          <div style={textStyle}>Under</div>
          <div style={percentageStyle}>30%</div>
        </div>
      </div>
    </div>
  );
}

/* # Não funcional ainda
export function Chances() {
  const containerStyle = {
    width: '220px',
    height: '150px',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'rgba(200, 200, 200, 0.8)', // Fundo cinza claro
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const progressBarStyle = {
    width: '90%',
    height: '20px',
    margin: '10px 0',
    borderRadius: '10px',
    backgroundColor: '#ccc',
  };

  const loudChance = 70;
  const painChance = 30;

  const loudBarStyle = {
    width: `${loudChance}%`,
    height: '100%',
    backgroundColor: '#369FFF',
    borderRadius: '10px',
  };

  const painBarStyle = {
    width: `${painChance}%`,
    height: '100%',
    backgroundColor: '#FF5733',
    borderRadius: '10px',
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'black', 
  };

  return (
    <div style={containerStyle}>
      <h2 style={textStyle}>Chances de Vitória</h2>
      <div style={progressBarStyle}>
        <div style={loudBarStyle}></div>
      </div>
      <p style={textStyle}>LOUD: {loudChance}%</p>
      <p style={textStyle}>PAIN: {painChance}%</p>
    </div>
  );
}*/







