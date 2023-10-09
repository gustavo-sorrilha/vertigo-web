"use client";

// Ainda não implementada

export function Kills() {
    return (
      <div className="flex flex-col mt-6">
        <div className="bg-blue-200 p-4 max-h-60 w-32 rounded-xl mb-4">
          <strong className="text-black">Kills Over</strong>
          <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center mt-4">
            <span className="text-black text-lg">70%</span>
          </div>
        </div>
  
        <div className="bg-blue-200 p-4 max-h-60 w-32 rounded-xl">
          <strong className="text-black">Under</strong>
          <div className="bg-white h-20 w-20 rounded-full flex items-center justify-center mt-4">
            <span className="text-black text-lg">30%</span>
          </div>
        </div>
      </div>
    );
  }
  
  
  
  
  
  
  
  
  