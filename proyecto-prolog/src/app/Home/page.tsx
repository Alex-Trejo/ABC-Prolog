'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

interface Vulnerability {
  ID: string;
  Descripcion: string;
  EPSS: string;
  Version: string;
}

export default function Home() {

  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const [os, setOs] = useState("Windows 10");
  const [epss, setEpss] = useState("0");

  const cleanValue = (value: string): string => {
    // Elimina los prefijos y sufijos 'b' y '
    return value.replace(/^b'/, "").replace(/'$/, "");
  };

  // Función para eliminar un elemento por ID
  const handleDelete = () => {
    setVulnerabilities([]);
  };

  const getVulnerabilities = async () => {
    try {
      const response = await axios.post('http://localhost:8000/complete/', {
        so: os
      });
      console.log('os:', os);
      console.log('Response:', response.data.items);
      setVulnerabilities(response.data.items);
      return response.data.items;
    } catch (error) {
      console.error('Error fetching vulnerabilities:', error);
      throw error;
    }
  };

  const getVulnerabilitiesRisk = async () => {
    try {
      const response = await axios.post('http://localhost:8000/risk/', {
        epss: epss
      });
      console.log('epss:', epss);
      console.log('Response:', response.data.items);
      setVulnerabilities(response.data.items);
      return response.data.items;
    } catch (error) {
      console.error('Error fetching vulnerabilities:', error);
      throw error;
    }
  }

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
            onChange={(e) => setOs(e.target.value)}
            className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:transition duration-100 ease-in-out"
          >
            <option value="Windows 10" className="text-gray-500">Windows 10</option>
            <option value="Mac Os X" className="text-gray-500">Mac Os X</option>
            <option value="Macos" className="text-gray-500">Macos</option>
            {/* Fedora */}
            <option value="Fedora" className="text-gray-500">Fedora</option>
            {/* Android */}
            <option value="Android" className="text-gray-500">Android</option>
            {/* Manjaro Linux */}
            <option value="Manjaro Linux" className="text-gray-500">Manjaro Linux</option>
            {/* Ubuntu Linux */}
            <option value="Ubuntu Linux" className="text-gray-500">Ubuntu Linux</option>
            {/* Solaris */}
            <option value="Solaris" className="text-gray-500">Solaris</option>
            {/* Debian */}


          </select>
        </div>

  
        

        <div>
          <label htmlFor="epss" className="block text-lg font-medium mb-2">Epss</label>
          <input
            type="number"
            id="epss"
            name="epss"
            step="any"  
            className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:transition duration-100 ease-in-out"
            placeholder="Ingresa un valor numérico"
            onChange={(e) => setEpss(e.target.value)}
          />
        </div>

      </div>


      <div className="flex gap-4">
        <button className=" bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1"
          onClick={getVulnerabilities}
        >
                  Busqueda Completa
        </button>   {/* ruta a ocupar http://127.0.0.1:8000/complete/
*/}
        <button className="bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1"
                onClick={getVulnerabilitiesRisk}
        >
                Analisis Alto Riesgo
        </button>  {/* Analisis Alto Riesgo http://127.0.0.1:8000/risk/*/}
        <button
                  onClick={() => handleDelete()}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
      </div>

      <div className="max-h-96 overflow-y-auto border border-gray-300">
        <table className="table-auto w-full border-collapse">
          <thead className="">
            <tr className="">
              <th className="border border-gray-300 px-4 py-2">Id</th>
              <th className="border border-gray-300 px-4 py-2">Descripcion</th>
              <th className="border border-gray-300 px-4 py-2">EPSS</th>
              <th className="border border-gray-300 px-4 py-2">Versión Afectada</th>
              
            </tr>
          </thead>
          <tbody>
          {
            vulnerabilities.map((vulnerability) => (
              <tr key={vulnerability.ID} className="">
                <td className="border border-gray-300 px-4 py-2">{cleanValue(vulnerability.ID)}</td>
                <td className="border border-gray-300 px-4 py-2">{cleanValue(vulnerability.Descripcion)}</td>
                <td className="border border-gray-300 px-4 py-2">{cleanValue(vulnerability.EPSS)}</td>
                <td className="border border-gray-300 px-4 py-2">{cleanValue(vulnerability.Version)}</td>
              </tr>
              
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}
