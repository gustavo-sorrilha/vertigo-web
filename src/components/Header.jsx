/* eslint-disable @next/next/no-img-element */
"use client";

export function Header() {
  const image_source = "https://i.pravatar.cc/300";

  return (
    <header className="flex justify-between h-10 p-10 w-full ">
       <input type="text" className="bg-white p-5 border-b-5 shadow-sm rounded-full ml-9" placeholder="Pesquisar" />
    
        
        <div className="flex w-56">
            <img 
                src={image_source}
                alt="imagem do usuário logado" 
                className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
            />
        </div>
       
    </header>
  )
}
