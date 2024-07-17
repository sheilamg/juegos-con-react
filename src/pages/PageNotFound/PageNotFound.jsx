import React from 'react'
import { NavLink } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <>
     <div>You seem lost kid..</div>
     <NavLink to="/">
        <button>Go Back Home..!</button>
     </NavLink>
    </>
    
  )
}
