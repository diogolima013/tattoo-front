import React from "react";
import "./style.scss";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // função para rolar até a seção "Sobre Nós"
  const scrollToSobreNos = () => {
    if (location.pathname !== "/home") {
      // se o usuário não estiver na página HomePage, redirecione-o para a página HomePage
      navigate("/home");
      setTimeout(() => {
        const sobreNos = document.getElementById("sobreNos");
        sobreNos.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    // role até a seção "Sobre Nós"
    document.getElementById("sobreNos").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-gray-800 py-3 w-screen h-28">
      <div className="container mx-auto flex items-center justify-between">
        <img src="logo.png" alt="Logo" className="h-8" />
        <div className="flex">
        <a
            href="/home"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded hover:text-white"
          >
            Home
          </a>   
        <button
        
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded hover:text-white"
            onClick={scrollToSobreNos}
          >
            Sobre Nós
          </button>
          <a
            href="/choiceUser"
            className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded hover:text-white"
          >
            Login
          </a>
       

       
        </div>
      </div>
    </nav>
  );
}
