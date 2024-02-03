import Image from "next/image";

import Canvas from "@/components/Canvas";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-powderBlue">
      <div className="flex">
          <div className=" bg-softSkyBlue p-4 m-1">
          <p>Div 1</p>
      </div>

      <div className=" bg-paleAqua p-2 my-1">
        <Canvas />
      </div>

      <div className=" bg-softSkyBlue p-4 m-1">
        <p>Div 3</p>
      </div>
      </div>
        
    </main>
  );
}
