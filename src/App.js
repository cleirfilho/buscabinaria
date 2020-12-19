import React, { useEffect, useState } from "react";
import "./styles.css";

const MostraVoltas = (props) => {
  return (
    <p>{props.voltas}
      <h2>Voltas</h2>
    </p>
  )
}
const MostrarTempo = (props) => {

  const tempo = props.tempo
  const min = Math.round(tempo / 60)
  const seg = tempo % 60
  const minstr = min < 10 ? '0' + min : min
  const segstr = seg < 10 ? '0' + seg : seg
  return (

    <p><h2>{minstr}:{segstr}</h2>
      
    </p>
  )
}
const Botao = (props) => {

  return (

    <button onClick={props.onClick}>{props.texto}</button>

  )
}
export default function App() {
  const [numVoltas, setnumVoltas] = useState(1)
  const [comecar, setcomecar] = useState(false)
  const [controle, setcontrole] = useState(0)
  const [tempo, settempo] = useState(0)
  useEffect(() => {
    let timer = null
    if (comecar) {
      timer = setInterval(() => {
        settempo(old => old + 1)
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [comecar])
  const iniciar = () => {
    setcomecar(!comecar)
    setcontrole(1)
  }
  const incrementa = () => {
    setnumVoltas(numVoltas + 1)
  }
  const decrementa = () => {
    if (numVoltas > 1) {
      setnumVoltas(numVoltas - 1)
    }
  }
  const reiniciar = () => {
    setnumVoltas(1)
    settempo(0)
    setcontrole(0)
    setcomecar(false)
  }
  return (
    <div className="App">
      <h1>Contador de Voltas </h1>
      <MostraVoltas voltas={numVoltas}></MostraVoltas>
      <Botao onClick={incrementa} texto='+'></Botao>
      <Botao onClick={decrementa} texto='-'></Botao>
      { controle > 0 &&
        <p>
        <h4>Tempo medio por volta</h4>
      <MostrarTempo tempo={Math.round(tempo / numVoltas)}></MostrarTempo>
      <h4>Tempo normal</h4>
      <MostrarTempo tempo={tempo}></MostrarTempo>
      </p>
      }
      <h5> Click abaixo para iniciar</h5>
      <Botao onClick={iniciar} texto={comecar ? 'Pausar': 'Iniciar'}></Botao>
      <Botao onClick={reiniciar} texto='Zerar'></Botao>
    </div>
  );
}
