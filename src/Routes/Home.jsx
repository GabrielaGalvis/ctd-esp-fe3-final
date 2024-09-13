import React from 'react'
import Card from '../Components/Card'
import {useDentistaStates} from "../utils/Context"

const Home = () => {
  console.log('RENDERIZANDO HOME')
  const {state} = useDentistaStates();
  console.log(state.lista)
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.lista.map((dato)=>(
          <Card key={dato.id} dentista={dato}/>
        ))}
      </div>
    </main>
  )
}

export default Home