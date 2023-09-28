"use client";

import { Card } from ".";

const partidas = [
  {
    times: [
      {
        vitorias: 12,
        derrotas: 6,
        imagem: "https://i.pravatar.cc/300",
        nome: "Loud"
      },
      {
        vitorias: 14,
        derrotas: 4,
        imagem: "https://i.pravatar.cc/300",
        nome: "Pain"
      }
    ],
    data_partida: "Ago 12, 13:00",
    nome_campeonato: "XX"
  },
  {
    times: [
      {
        vitorias: 12,
        derrotas: 6,
        imagem: "https://i.pravatar.cc/300",
        nome: "Loud"
      },
      {
        vitorias: 14,
        derrotas: 4,
        imagem: "https://i.pravatar.cc/300",
        nome: "Pain"
      }
    ],
    data_partida: "Set 02, 22:00",
    nome_campeonato: "YY"
  }
]

export function Partidas() {
  return (
    <div className="flex flex-col items-start">
      <h1>Próximos jogos</h1>
      <section className="flex items-center justify-between gap-8 mt-3">
        {partidas.map((partida, index) => (
          <Card key={index} data={partida} />
        ))}
      </section>
    </div>
  );
}