import { useState } from 'react'

import './App.css'

function App() {
  const [hi, setHi] = useState();
  const [mi, setMi] = useState();
  const [hf, setHf] = useState();
  const [mf, setMf] = useState();
  const [resultado, setResultado] = useState("Resultado");
  
  const soma = () => {
    let somaHora = Number(hi.value) + Number(hf.value);
    let somaMinuto = Number(mi.value) + Number(mf.value);
    while(somaMinuto > 59){
        somaMinuto -= 60;
        somaHora++;
    }
    setResultado('${SomaHora}:${SomaMinuto}')
  }


  }

  const sub = () =>{
    let momentoInicial = hi.value * 60 + Number(mi.value);
    let momentoFinal = hf.value * 60 + Number(mf.value);
    let resultadoEmMinutos = momentoInicial - momentoFinal;
    if (resultadoEmMinutos < 0){
        resultadoEmMinutos *= -1;
    }
    let resultadoEmHoras = 0;
    while(resultadoEmMinutos > 59){
        resultadoEmHoras ++;
        resultadoEmMinutos -= 60;
    }
    setResultado('${resultadoEmHora}:${resultadoEmMinutos}');
  }
  return (
    <>
    <h1>Calculadora</h1>  
  <div id="horario"></div>
  <h2>________________________________________</h2>
  <div class="zeca"/>

    <h3>Calcule os horários</h3>
    <input type="number" value={hi} onChange={(e) => setHi(e.target.value)} placeholder="Hora inicial"/>&nbsp; :&nbsp;
    <input type="number" value={mi} onChange={(e) => setMi(e.target.value)} placeholder="Minuto inicial"/><br/>
    <input type="number" value={hf} onChange={(e) => setHf(e.target.value)} placeholder="Hora Final"/>&nbsp; :&nbsp;
    <input type="number" value={mf} onChange={(e) => setMf(e.target.value)} placeholder="Minuto Final"/><br/>
    <button onclick="soma()">Soma</button>
    <button onclick="sub()">Diferença</button>
    <h3 id="r">0:00</h3>
    </>
  )


export default App
