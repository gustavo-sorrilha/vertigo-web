/* eslint-disable @next/next/no-img-element */
"use client";

export function Card({ partida }) {
  const { nome_campeonato, data_partida, times } = partida;

  return (
    <div className="bg-stone-950 p-4 max-h-60 w-64 rounded-xl">
      <header className="flex justify-between items-center text-slate-500">
        <span>{nome_campeonato}</span>
        <p>{data_partida}</p>
      </header>

      <div className="flex justify-between items-center text-white my-4">
        {times.map((time, index) => (
          <div className="flex flex-col items-center gap-2" key={time.id}>
            <img src={time.imagem} alt="Imagem do time" className="h-12 w-12 rounded-full cursor-pointer" />
            <span>{time.nome}</span>
          </div>
        ))}
      </div>

      <footer className="flex justify-between items-center gap-3 text-white text-center">
        <div className="p-2 bg-slate-800 w-full">
          <strong>1.09</strong>
        </div>

        <div className="p-2 bg-slate-800 w-full rounded-md">
          <strong>1.09</strong>
        </div>
      </footer>
    </div>
  );
}

