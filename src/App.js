import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [estado, setestado] = useState("Iniciar");
  const [numpalpites, setnumpalpites] = useState(1);
  const [max, setmax] = useState(300);
  const [min, setmin] = useState(0);
  const [palpite, setpalpite] = useState(150);

  const fimdejogo = () => {
    setestado("fim");
  };
  const iniciarjogo = () => {
    setestado("Jogando");
    setmax(300);
    setmin(0);
    setnumpalpites(1);
    setpalpite(151);
  };

  const menor = () => {
    setnumpalpites(numpalpites + 1);
    setmax(palpite);
    const proxpalpite = parseInt((palpite - min) / 2) + min;
    setpalpite(proxpalpite);
  };

  const maior = () => {
    setnumpalpites(numpalpites + 1);
    setmin(palpite);
    const proxpalpite = parseInt((max - palpite) / 2 + palpite);
    setpalpite(proxpalpite);
  };
  const desistir = () => {
    setestado("Iniciar");
  };
  if (estado === "Iniciar") {
    return (
      <div className="App">
        <h3>Clique em inicar para gerar um palpite</h3>
        <button onClick={iniciarjogo}>Iniciar jogo</button>
      </div>
    );
  }
  if (estado === "fim") {
    return (
      <div className="App">
        <h3>Parabens você Acertou !!!!!!!</h3>
        <h5>Quantidades de palpite é : {numpalpites}</h5>
        <h5>Palpite certo é: {palpite}</h5>
        <h5>Clique para jogar novamente</h5>
        <button onClick={iniciarjogo}>Iniciar jogo</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Que Iniciem os jogos </h1>
      <h2>Meu palpite é: {palpite}</h2>

      <button onClick={menor}>Menor</button>
      <button onClick={fimdejogo}>Acertou!</button>
      <button onClick={maior}>Maior</button>
      <h5> Clique para desistir</h5>
      <button onClick={desistir}> Desistir</button>
    </div>
  );
}
