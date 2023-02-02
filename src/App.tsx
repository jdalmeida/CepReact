import { useState } from "react";
import {AppRoutes} from "./routes";
import api from './services/api';

import './app.css';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');

  async function handleSearch(){
    

    if(input === ''){
      alert("insira algum CEP")
      return;
    }

    try{
      const response = await api.get(input+'/json');
      console.log(response.data);
      setCep(response.data);
      setInput('');

    }catch{
      alert("erro ao buscar");
      setInput('')
    }

  }

  return(
  <div className="container">
    <h1 className="title">Buscador de Cep</h1>
    <div className="containerInput">
      <input type="text"
      placeholder="Digite seu cep_"
      value={input}
      onChange={(e)=> setInput(e.target.value)}
      />
      <button className="buttonSearch" onClick={handleSearch}>
      Procurar
      </button>
    </div>

    {Object.keys(cep).length >0 && (
    <main className="main">
      <h2>CEP: {cep.cep}</h2>

      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade}</span>
    </main>)}
    
  </div>
  );
}

export default App
