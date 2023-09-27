/* eslint-disable @next/next/no-img-element */
"use client";

export function Header() {
  const image_source = "https://i.pravatar.cc/300";

  return (
    <header className="flex justify-between py-5 w-11/12 m-auto">
       <input type="text" className="bg-white p-3 border-b-5 shadow-sm rounded-full" placeholder="Pesquisar" />
    
        <div className="flex">
          <img 
            src={image_source}
            alt="imagem do usuário logado" 
            className="h-12 w-12 rounded-full cursor-pointer"
          />      
        </div>
    </header>
  )
}
