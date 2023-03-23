import { BsFillArrowRightCircleFill } from "react-icons/bs";
import './app.css';
import React from "react";
import { NavLink } from "react-router-dom";



function App() {
  return (
    <div className="container">

      <img className="title" src="https://coffops.com/wp-content/uploads/2022/04/rest-api.png" />

      <div className="botoes">

        <NavLink to="/cep">
        <button className="botao">Cep App <BsFillArrowRightCircleFill/></button>
        </NavLink>
        <NavLink to="/clima">
        <button className="botao">Clima App <BsFillArrowRightCircleFill/></button>
        </NavLink>

      </div>
    </div>
  );
}

export default App
