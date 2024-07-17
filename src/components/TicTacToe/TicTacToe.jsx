import React from 'react'
import { NavLink } from 'react-router-dom'
import { ContenedorJuego } from './ContenedorJuego'

export const TicTacToe = () => {
  return (
    <>
      <div>Proximamente..</div> 
      <NavLink to="/">
        <button>Go to Home</button>
      </NavLink>
      <ContenedorJuego /> 
    </>
  )
}
