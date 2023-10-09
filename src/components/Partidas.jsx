"use client";

import { useState, useEffect } from 'react';
import { Card } from "./Card";


async function carregarDados(){
  const url = "http://localhost:8080/partidas"
  const resp = await fetch(url, {next: {revalidate: 0} })

  if (resp.status !== 200) {
    alert("erro ao buscar dados das partidas")
    return 
  } 
  return await resp.json()
}


function Partidas() {
  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await carregarDados();
      setPartidas(data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-start">
      <h1>Próximos jogos</h1>
      <section className="flex items-center justify-between gap-8 mt-3">
        {partidas.map(partida => (
          <Card key={partida.id} partida={partida} />
        ))}
      </section>
    </div>
  );
}
export default Partidas;