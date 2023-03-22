import { useState } from "react";
import { AppRoutes } from "./routes";
import api from './services/api';
import clima from './services/clima';
import prevision from './services/prevision'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import './app.css';
import React from "react";


function App() {

  const [input, setInput] = useState('');
  const [clim, setClima] = useState('');
  const [previsao, setPrev] = useState('');


  async function getClima() {
      if (input === '') {
      alert("insira alguma cidade")
      return;
    }
    try {
      const cl = await clima.get(input + '&aqi=no');
      console.log(cl.data);
      setClima(cl.data);
    } catch {
      alert("erro ao buscar");
    }

    try {
      const pv = await prevision.get(input + '&days=14&aqi=no&alerts=yes');
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
          placeholder="Insira sua cidade"
          value={input}
          onChange={(e) => setInput(e.target.value)
          }
        />
        <button className="buttonSearch" onClick={getClima}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div className="result">
        {Object.keys(clim).length > 0 && (
          <main className="main">
            <h2>{clim.location.name}</h2>
            <img src={"https:" + clim.current.condition.icon} />
            <span>{clim.current.condition.text}</span>
            <span>{clim.current.temp_c + "°C"}</span>
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
