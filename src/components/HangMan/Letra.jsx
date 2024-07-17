import React, { useEffect, useState } from 'react'
import { Palabra } from './Palabra'

export const Letra = () => {
   //equivalente a resCorrecta del componente Palabra...
   //const [data, setData] = useState([])
   const [letra, setLetra] = useState('')
   
    //const handleLetrita = () => {
    //    setData(prevData => [...prevData,letra])

    //    setLetra('');
   //}

  return (
    <div>
        <Palabra  letra={letra} setLetra={setLetra}/>
        <label htmlFor='letrita'>Letra</label>
        <input type='text' name='letrita' value={letra} placeholder='Ingresar posible letra..' onChange={ e => setLetra(e.target.value)} />
        {/*<input type='button' value='Adivinar' onClick={handleLetrita}/>*/}
    </div>
  )
}
