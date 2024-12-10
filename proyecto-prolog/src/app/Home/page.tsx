import Image from "next/image";

export default function Home() {
  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 w-full bg-white/15 backdrop-blur-md p-4 flex items-center justify-between z-50 ">

        <div className="flex items-center gap-4">

          <h1 className="text-xl font-bold ">Análisis de Vulnerabilidades</h1>
        </div>

        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#home" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                Características
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#a64d79_100%)]"></div>
      
      <div>
        <h1 className="text-5xl font-bold mt-20 ">Análisis de Vulnerabilidades</h1>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md">
      
        <div>
          <label htmlFor="os" className="block text-lg font-medium mb-2">Sistema Operativo</label>
          <select
            id="os"
            className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:transition duration-100 ease-in-out"
          >
            <option value="windows" className="text-gray-500">Windows</option>
            <option value="macos" className="text-gray-500">macOS</option>
            <option value="linux" className="text-gray-500">Linux</option>
          </select>
        </div>

  
        <div>
          <label htmlFor="version" className="block text-lg font-medium mb-2">Versión</label>
          <select
            id="version"
            className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="10" className="text-gray-500">10</option>
            <option value="11" className="text-gray-500">11</option>
            <option value="12" className="text-gray-500">12</option>
          </select>
        </div>
      </div>


      <div className="flex gap-4">
        <button className=" bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1">Busqueda Completa</button>
        <button className="bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1">Analisis Alto Riesgo</button>
        <button className="bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1">Burscar Más Común</button>
      </div>

      <div className="w-full max-w-4xl overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 z-10">
          <thead className="">
            <tr className="">
              <th className="border border-gray-300 px-4 py-2">Id Vulnerabilidad</th>
              <th className="border border-gray-300 px-4 py-2">Tipo Vulnerabilidad</th>
              <th className="border border-gray-300 px-4 py-2">Nivel De Riesgo</th>
              <th className="border border-gray-300 px-4 py-2">Versión Afectada</th>
              <th className="border border-gray-300 px-4 py-2">Solución</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Vuln1</td>
              <td className="border border-gray-300 px-4 py-2">Descripción de la vulnerabilidad 1</td>
              <td className="border border-gray-300 px-4 py-2">Alta</td>
              <td className="border border-gray-300 px-4 py-2">Vuln1</td>
              <td className="border border-gray-300 px-4 py-2">Vuln1</td>
            </tr>
            <tr className="">
              <td className="border border-gray-300 px-4 py-2">Vuln2</td>
              <td className="border border-gray-300 px-4 py-2">Descripción de la vulnerabilidad 2</td>
              <td className="border border-gray-300 px-4 py-2">Media</td>
              <td className="border border-gray-300 px-4 py-2">Vuln1</td>
              <td className="border border-gray-300 px-4 py-2">Vuln1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
