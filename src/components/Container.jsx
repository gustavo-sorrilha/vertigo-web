import React from 'react';

export function Container({ children }) {
  return (
    <div className="flex w-11/12 m-auto h-screen bg-white p-5">
      {children}
    </div>
  );
}

export const GameContainers = () => {
  return (
      <div class="w-1101 h-294 flex-shrink-0">
      <div class="grid grid-cols-3 gap-4">
          <div class="w-1101 h-294 flex-shrink-0 border-radius-8 bg-purple-800 p-4">
          <div class="text-white">CBLOL</div>
          <div class="text-white">Outubro 15, 14:00</div>
          <div class="flex justify-center items-center gap-16">
              <div class="flex-1 flex-shrink-0 border-radius-4 bg-purple-900 p-2">
              <div class="text-white">Time 1</div>
              <img src="caminho-da-logo-time-1.png" alt="Logo Time 1" class="w-20 h-20 mx-auto" />
              <button class="text-white">Odd: 2.00</button>
              </div>
              <div class="flex-1 flex-shrink-0 border-radius-4 bg-purple-900 p-2">
              <div class="text-white">Time 2</div>
              <img src="caminho-da-logo-time-2.png" alt="Logo Time 2" class="w-20 h-20 mx-auto" />
              <button class="text-white">Odd: 3.00</button>
              </div>
          </div>
          </div>

          <div class="w-1101 h-294 flex-shrink-0 border-radius-8 bg-purple-800 p-4">
          <div class="text-white">CBLOL</div>
          <div class="text-white">Outubro 15, 15:30</div>
          <div class="flex justify-center items-center gap-16">
              <div class="flex-1 flex-shrink-0 border-radius-4 bg-purple-900 p-2">
              <div class="text-white">Time 1</div>
              <img src="caminho-da-logo-time-3.png" alt="Logo Time 3" class="w-20 h-20 mx-auto" />
              <button class="text-white">Odd: 2.50</button>
              </div>
              <div class="flex-1 flex-shrink-0 border-radius-4 bg-purple-900 p-2">
              <div class="text-white">Time 2</div>
              <img src="caminho-da-logo-time-4.png" alt="Logo Time 4" class="w-20 h-20 mx-auto" />
              <button class="text-white">Odd: 3.20</button>
              </div>
          </div>
          </div>

          <div class="w-1101 h-294 flex-shrink-0 border-radius-8 bg-purple-800 p-4">
          <div class="text-white">CBLOL</div>
          <div class="text-white">Outubro 15, 17:00</div>
          <div class="flex justify-center items-center gap-16">
              <div class="flex-1 flex-shrink-0 border-radius-4 bg-purple-900 p-2">
              <div class="text-white">Time 1</div>
              <img src="caminho-da-logo-time-5.png" alt="Logo Time 5" class="w-20 h-20 mx-auto" />
              <button class="text-white">Odd: 2.80</button>
              </div>
              <div class="flex-1 flex-shrink-0 border-radius-4 bg-purple-900 p-2">
              <div class="text-white">Time 2</div>
              <img src="caminho-da-logo-time-6.png" alt="Logo Time 6" class="w-20 h-20 mx-auto" />
              <button class="text-white">Odd: 3.50</button>
              </div>
          </div>
          </div>
      </div>
      </div>
  );
};

export const DropdownButton = () => {
  return (
      <div class="relative inline-block">
      <button class="w-220 h-36 px-0 flex-shrink-0 border-radius-8 bg-blue-500 text-white flex items-center justify-between">
          <span style="color: #53F; padding: 8px 16px; display: flex; align-items: flex-start; gap: 8px;">LOUD</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
          <path d="M10 12l-6-6h12z" />
          </svg>
      </button>
      </div>
  );
};

export const MapContainer = () => {
  return (
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
  );
};

export const BaronContainer = () => {
  return (
      <div style="width: 300px; height: 165px; flex-shrink: 0; border-radius: 20px; background: #8AC53E; box-shadow: 0px 10px 30px 0px rgba(138, 197, 62, 0.40); position: relative; display: flex; justify-content: space-between; align-items: center; padding: 10px;">
          <div style="width: 72px; height: 72px; flex-shrink: 0; border-radius: 50%; background: #fff; text-align: center; line-height: 72px; font-size: 24px;">60%</div>
          <div style="position: absolute; top: 10px; left: 10px; color: #fff; font-weight: bold;">Under de Baron</div>
          <img src="caminho-da-imagem-do-baron.png" alt="Baron do LoL" style="max-width: 100%; max-height: 100%; position: absolute; top: 10px; right: 10px;"></img>
      </div>

  );
};


  
