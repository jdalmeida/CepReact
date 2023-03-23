import { useState } from "react";
import { AppRoutes } from "./routes";
import api from './services/cepApi';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import './app.css';
import React from "react";
import { NavLink } from "react-router-dom";

function Cep() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');
  document.title="Cep App"


  async function getCep() {
      if (input === '') {
      alert("insira alguma cidade")
      return;
    }
    try {
      const cl = await api.get(input + '/json');
      console.log(cl.data);
      setCep(cl.data);
    } catch {
      alert("erro ao buscar");
    }
  }

  return (
    <div className="container">
      <div className="botoes2">
        <NavLink to="/home"><button className="botao2"><BsFillHouseFill/></button></NavLink>
      </div>
      <img className="title" src="https://images.squarespace-cdn.com/content/v1/5e16470826f3f50d6e6fa9c0/1627423118128-VHHU0IEBBM6K9PVL9HY9/LOCATION+MARKER+WHERE+ICON+BLUE.png?format=500w" />
      <div className="containerInput">
        <input type="text"
          placeholder="Insira seu Cep"
          value={input}
          onChange={(e) => setInput(e.target.value)
          }
        />
        <button className="buttonSearch" onClick={getCep}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div className="result">
        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>{cep.localidade}</h2>
            <span>{cep.logradouro}</span>
            <span>{cep.bairro}</span>
            <span>{cep.complemento}</span>
          </main>)}


      </div>
    </div>
  );
}

export default Cep