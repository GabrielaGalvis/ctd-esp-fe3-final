
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {useDentistaStates} from "../utils/Context"
import '../index.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

 //const {toggleTheme} = useDentistaStates();

 const {dispatch} = useDentistaStates();
  const toggleTheme = ()=>{
    dispatch({type:"TOGGLE_THEME"});
  }

  return (
    <nav>
      <p>DH </p>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contacto">
        <h4>Contact</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="botonTema" onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar