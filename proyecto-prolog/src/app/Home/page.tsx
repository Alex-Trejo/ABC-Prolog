"use client";

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
  const [opes, setOpes] = useState("Windows 10");
  const [version, setVersion] = useState("");
  const [epss, setEpss] = useState("");
  const [extraFilter, setExtraFilter] = useState("Año");
  const [extraFilterValue, setExtraFilterValue] = useState("");
  const [risk, setRisk] = useState(0);
  const [commonSearh, setCommonSearh] = useState("");

  const cleanValue = (value: string): string => {
    // Elimina los prefijos y sufijos 'b' y '
    return value.replace(/^b'/, "").replace(/'$/, "");
  };

  // Función para eliminar un elemento por ID
  const handleDelete = () => {
    setVulnerabilities([]);
  };

  const getAllVulnerabilities = async () => {
    try {
      const response = await axios.post("http://localhost:8000/complete/", {
        os: opes,
      });
      console.log("os:", opes);
      console.log("Response:", response.data.items);
      setVulnerabilities(response.data.items);
      return response.data.items;
    } catch (error) {
      console.error("Error fetching vulnerabilities:", error);
      throw error;
    }
  };

  const getVulnerabilitiesByVersion = async () => {
    try {
      const response = await axios.post("http://localhost:8000/version/", {
        version: version,
      });
      console.log("version:", version);
      console.log("Response:", response.data.items);
      setVulnerabilities(response.data.items);
      return response.data.items;
    } catch (error) {
      console.error("Error fetching vulnerabilities:", error);
      throw error;
    }
  };

  const getRiskSO = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/probability_so/",
        {
          os: opes,
        }
      );
      console.log("os:", opes);
      console.log("Response:", response.data);
      setRisk(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching vulnerabilities:", error);
      throw error;
    }
  };

  const getRiskVersion = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/probability_version/",
        {
          os: opes,
          version: version,
        }
      );
      console.log("version:", version);
      console.log("Response:", response.data);
      setRisk(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching vulnerabilities:", error);
      throw error;
    }
  };

  const getVulBy = async () => {
    try {
      if (extraFilter === "Fecha") {
        const response = await axios.post("http://localhost:8000/date/", {
          fecha: extraFilterValue,
        });
        setVulnerabilities(response.data.items);
        return response.data.items;
      }

      if (extraFilter === "CVE") {
        const response = await axios.post("http://localhost:8000/cve/", {
          cve: extraFilterValue,
        });
        setVulnerabilities(response.data.items);
        return response.data.items;
      }

      if (extraFilter === "Texto") {
        const response = await axios.post("http://localhost:8000/text/", {
          texto: extraFilterValue,
        });
        setVulnerabilities(response.data.items);
        return response.data.items;
      }
    } catch (error) {
      console.error("Error fetching vulnerabilities:", error);
      throw error;
    }
  };

  const getVulCommon = async () => {
    try {
      if (commonSearh === "Driver") {
        const response = await axios.post("http://localhost:8000/driver/", {
          os: opes,
        });
        setVulnerabilities(response.data.items);
        return response.data.items;
      }

      if (commonSearh === "Ataque") {
        const response = await axios.post("http://localhost:8000/attack/", {
          os: opes,
        });
        setVulnerabilities(response.data.items);
        return response.data.items;
      }

      if (commonSearh === "Acceso") {
        const response = await axios.post("http://localhost:8000/access/", {
          os: opes,
        });
        setVulnerabilities(response.data.items);
        return response.data.items;
      }
    } catch (error) {
      console.error("Error fetching vulnerabilities:", error);
      throw error;
    }
  };

  const getVulnerabilitiesRisk = async () => {
    try {
      const response = await axios.post("http://localhost:8000/risk/", {
        epss: epss,
      });
      console.log("epss:", epss);
      console.log("Response:", response.data.items);
      setVulnerabilities(response.data.items);
      return response.data.items;
    } catch (error) {
      console.error("Error fetching vulnerabilities:", error);
      throw error;
    }
  };

  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <title>Analisis Vulneravilidades</title>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#a64d79_100%)]"></div>

      <div>
        <h1 className="text-5xl font-bold mt-20 ">
          Análisis de Vulnerabilidades
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-l">
        <div>
          <label htmlFor="os" className="block text-lg font-medium mb-2">
            Sistema Operativo
          </label>
          <div className="flex">
            <select
              id="os"
              onChange={(e) => setOpes(e.target.value)}
              className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:transition duration-100 ease-in-out"
            >
              <option value="Windows 10" className="text-gray-500">
                Windows 10
              </option>
              <option value="Mac Os X" className="text-gray-500">
                Mac Os X
              </option>
              <option value="Macos" className="text-gray-500">
                Macos
              </option>
              {/* Fedora */}
              <option value="Fedora" className="text-gray-500">
                Fedora
              </option>
              {/* Manjaro Linux */}
              <option value="Manjaro Linux" className="text-gray-500">
                Manjaro Linux
              </option>
              {/* Ubuntu Linux */}
              <option value="Ubuntu Linux" className="text-gray-500">
                Ubuntu Linux
              </option>
              {/* Solaris */}
              <option value="Solaris" className="text-gray-500">
                Solaris
              </option>
              {/* Debian */}
            </select>

            <button
              className=" bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1"
              onClick={getAllVulnerabilities}
            >
              Buscar
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="os" className="block text-lg font-medium mb-2">
            Version
          </label>
          <div className="flex">
            <input
              id="version"
              onChange={(e) => setVersion(e.target.value)}
              className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:transition duration-100 ease-in-out"
            ></input>

            <button
              className=" bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1"
              onClick={getVulnerabilitiesByVersion}
            >
              Buscar
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="epss" className="block text-lg font-medium mb-2">
            Epss
          </label>
          <div className="flex">
            <input
              type="number"
              id="epss"
              name="epss"
              step="any"
              className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:transition duration-100 ease-in-out"
              placeholder="Ingresa un valor numérico"
              onChange={(e) => setEpss(e.target.value)}
            />
            <button
              className="bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1"
              onClick={getVulnerabilitiesRisk}
            >
              Buscar
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="os" className="block text-lg font-medium mb-2">
            Filtro Extra
          </label>
          <div className="flex">
            <select
              id="os"
              onChange={(e) => setExtraFilter(e.target.value)}
              className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:transition duration-100 ease-in-out"
            >
              <option value="Fecha" className="text-gray-500">
                Año
              </option>
              <option value="CVE" className="text-gray-500">
                CVE
              </option>
              <option value="Texto" className="text-gray-500">
                Texto
              </option>
            </select>
            <input
              type="text"
              className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:transition duration-100 ease-in-out"
              onChange={(e) => setExtraFilterValue(e.target.value)}
            />
            <button
              className=" bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1"
              onClick={getVulBy}
            >
              Buscar
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="os" className="block text-lg font-medium mb-2">
            Probabilidad de Riesgo: {risk.toFixed(2)} %
          </label>
          <div>
            <button
              className="m-2 bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1"
              onClick={getRiskSO}
            >
              Calcular riesgo por Sistema Operativo
            </button>
            <button
              className="m-2 bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1"
              onClick={getRiskVersion}
            >
              Calcular riesgo por Version
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="os" className="block text-lg font-medium mb-2">
            Busqudas comunes
          </label>
          <div>
            <div className="flex">
              <select
                id="os"
                onChange={(e) => setCommonSearh(e.target.value)}
                className="text-gray-500 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:transition duration-100 ease-in-out"
              >
                <option value="Driver" className="text-gray-500">
                  Driver
                </option>
                <option value="Ataque" className="text-gray-500">
                  Ataque
                </option>
                <option value="Acceso" className="text-gray-500">
                  Acceso
                </option>
              </select>
              <button
                className="m-2 bg-pink-700 text-white px-4 py-2 rounded-md hover:scale-110 transition delay-100 ease-in-out duration-300 hover:-translate-y-1"
                onClick={getVulCommon}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {" "}
        {/* Analisis Alto Riesgo http://127.0.0.1:8000/risk/*/}
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
              <th className="border border-gray-300 px-4 py-2">
                Versión Afectada
              </th>
            </tr>
          </thead>
          <tbody>
            {vulnerabilities.map((vulnerability) => (
              <tr key={vulnerability.ID} className="">
                <td className="border border-gray-300 px-4 py-2">
                  {cleanValue(vulnerability.ID)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {cleanValue(vulnerability.Descripcion)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {cleanValue(vulnerability.EPSS)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {cleanValue(vulnerability.Version)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
