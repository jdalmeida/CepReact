import { useState } from "react";
import { AppRoutes } from "./routes";
import api from './services/api';
import clima from './services/clima';
import prevision from './services/prevision'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import './app.css';
import React from "react";


function App() {

  const [cep, setCep] = useState('');
  const [input, setInput] = useState('');
  const [clim, setClima] = useState('');
  const [previsao, setPrev] = useState('');

  async function handleSearch() {
    if (input === '') {
      alert("insira algum CEP")
      return;
    }

    try {
      const response = await api.get(input + '/json');
      console.log(response.data);
      setCep(response.data);
      setInput('');

    } catch {
      alert("erro ao buscar");
      setInput('')
    }


  }

  async function getClima() {
    try {
      const cl = await clima.get(cep.localidade + '&aqi=no');
      console.log(cl.data);
      setClima(cl.data);
    } catch {
      alert("erro ao buscar");
    }
  }

  async function getPrev() {
    try {
      const pv = await prevision.get(cep.localidade + '&days=14&aqi=no&alerts=yes');
      console.log(pv.data);
      setPrev(pv.data);
    } catch {
      alert("erro ao buscar");
    }

  }

  return (
    <div className="container">
      <img className="title" src="https://cdn-icons-png.flaticon.com/512/1247/1247784.png?w=740&t=st=1679504331~exp=1679504931~hmac=deb06cd1b65cf0cc7bb935a92d128e53ebdbfe5f5a8fe453d1634db721b6c7bb" />
      <div className="containerInput">
        <input type="text"
          placeholder="Digite seu cep_"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div className="result">
        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade}</span>
            <button className="buttonSearch" onClick={getClima}>Veja o clima na região<BsFillArrowRightCircleFill /></button>
          </main>)}

        {Object.keys(clim).length > 0 && (
          <main className="main">
            <h2>{clim.location.name}</h2>
            <img src={"https:" + clim.current.condition.icon} />
            <span>{clim.current.condition.text}</span>
            <span>{clim.current.temp_c + "°C"}</span>
            <button className="buttonSearch" onClick={getPrev}>Veja a previsão para a região<BsFillArrowRightCircleFill /></button>
          </main>)}


      </div>
      <div className="prevision">
        {Object.keys(previsao).length > 0 && (
          <main className="pre">
            {previsao.forecast.forecastday.map(element => (
              <div className="prev">
              <React.Fragment key={element.date}>
                <h3>{element.date}</h3>
                <img src={"https:" + element.day.condition.icon} />
                <span>{element.day.maxtemp_c + "°C"}</span>
                <span>{element.day.mintemp_c + "°C"}</span>
              </React.Fragment>
              </div>
            ))}
          </main>)}
      </div>
    </div>
  );
}

export default App
