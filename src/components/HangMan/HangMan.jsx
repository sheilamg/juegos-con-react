import React from 'react'
import { NavLink } from 'react-router-dom'
import "./HangMan.css"
import { ContenedorJuego } from './ContenedorJuego'

export const HangMan = () => {
  return (
    <div className='game-content'>
        <NavLink to="/">
        <button className='home-button'>Go to Home</button>
        </NavLink>
        <ContenedorJuego />
    </div>

  )
}
