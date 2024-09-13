import React from "react";
import CardStyles from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import {useDentistaStates} from "../utils/Context"

const Card = ({dentista}) => {
  console.log(`RENDERIZANDO CARD ${dentista.id}`)
  const {state,dispatch} = useDentistaStates();
  const {name, username, id} = dentista;
  const isFav = state.favs.find((fav) => fav.id == dentista.id);
  console.log('isFav',isFav)
  const addFav = ()=>{
    if(isFav){
      console.log('eliminar de fav')
      dispatch({type:"REMOVE_FAV", payload:dentista});

    }else{
    console.log('añadir a fav')
    dispatch({type:"ADD_FAV", payload:dentista});
    //setFavs((favs) => [...favs, dentista])
    }
  }

  return (
    <div className="card">
        <img src="../../images/doctor.jpg" className={CardStyles.cardImg}/> 
        <Link to={"/detail/" + id}>
          <h3>{name}</h3>
        </Link>
        <h4>{username}</h4>


        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{isFav ? "🌟" : "⭐"}</button>
    </div>

    
  );
};

export default Card;
