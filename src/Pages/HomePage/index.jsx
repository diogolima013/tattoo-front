import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./style.scss";
import Carrossel from "../../Components/Carrossel";
import Hand from "../../stylesheet/assents/Mao.png";
import Machine from "../../stylesheet/assents/Machine.png";
import Dragon from "../../stylesheet/assents/Dragon.png";
import Back from "../../stylesheet/assents/Background.png";
import Footer from "../../Components/Footer/index"

export default function Form() {
  return (
    <div className="body">
      <img className="back" src={Back} />
      <header id="topo">
        <Navbar />
        <h1>Bem Vindo!</h1>
        <h2>-- Sua imaginação é nosso limite --</h2>
      </header>

      <div className="slids">
        <h2 className="slide-title">O <b id="fav">favorito</b> da galera!</h2>
        <Carrossel />
      </div>
      <center>
        <div className="block1">
        <div id="sobreNos" className="text">
          <h1>Sobre Nós</h1>
          <p>
          Este é um site focado nos estúdios de tatuagem desenvolvido pela equipe da clear cloud software,
           uma empresa de inovação. Nosso o objetivo com “NOME DO SITE” é ajudar os estúdios de tatuagem a encontrar clientes,
            outros estúdios e na hora de calcular seus preços,
             colaborando com a comunicação de ambos os lados, tanto do cliente, quanto do tatuador.
          </p>
          <img className="img1" src={Hand} />

          <img className="img2" src={Machine} />
        </div>
         <div className="block2">
        <div id="nossaMissão" className="text">
          <h1>Nossa Missão</h1>
          <p>
          Auxilias os estúdios de tatuagem a calcular custos e melhorar a
            comunicação com os consumidores, além de facilitar a busca por novos
            clientes de maneira simples e prática.
          </p>

          <img className="img3" src={Dragon} />
        </div>
        <div id="comoFazemos" className="text">
          <h1>Como Fazemos Isto?</h1>
          <p>
          Para isso, criamos esse site que irar promover uma comunidade de
            estúdios e interessados em tatuagens, os interessados poderão se
            comunicar com os estúdios, e os estúdios poderão compartilhar seu
            conteúdo para mostrar seu trabalho os tatuadores também terão
            auxílio na hora que precisarem refazer seus trabalhos em diferentes
            tamanhos, já que calcularemos preços de tamanhos variados para a
            mesma tatuagem.
          </p>
          <br /> <br />
          <button
            className="button"
            onClick={() =>
              document
                .getElementById("topo")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            {" "}
            Voltar ao topo{" "}
          </button>
          <br/>  <br/>  <br/>
          <footer>
          <Footer/>
          </footer>
        </div>
        </div>
        </div>
      </center>
     
    </div>
  );
}
