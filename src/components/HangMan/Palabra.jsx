import React, { useEffect, useState } from 'react'
import { obtenerPalabraRandom } from './constantes/const';

export const Palabra = (props) => {
  //props de padre Letra, (letra padre de palabra :D ?) 
  const { letra, setLetra } = props
  
 
  const [ranWord, setRanWord] = useState('');
  const [resCorrecta, setResCorrecta] = useState([])
  const [vida, setVida] = useState(0)
  const vidaMaxima = 6

  //forma '_ _ _ _ _'
  const palabraOculta = ranWord.split("").map(letter => 
    resCorrecta.includes(letter) ? letter : '_').join(" ");

  //para obtener la palabra random inicial
  useEffect( () => {
    setRanWord(obtenerPalabraRandom())
  }, []);

  //para ver por consola lo que obtengo
  useEffect( () => {
    //console.log(data);
    console.log(vida); 
  }, [vida]);


  //mecanismo del juego..
  useEffect( () => {
    if(letra){
     (ranWord.includes(letra)) ?
     setResCorrecta([...resCorrecta, letra]) :
     setVida(vida + 1)
     }
    
  }, [letra, ranWord])

  //resetea el juego
  const resetearJuego = () =>{
    setLetra('')
    setRanWord(obtenerPalabraRandom())
    setResCorrecta([])
    setVida(0)   
  }

  return (
    <div>
        <h1>Tu palabra es</h1>
        <p>{palabraOculta}</p>
        {/*<p>{ranWord.split("").fill("_").join(" ")}</p>*/}
        {console.log(palabraOculta)}
        <p>{vida} / {vidaMaxima} </p>
        { (vida === vidaMaxima) ? 
        <p>perdiste</p> : 
        ((!palabraOculta.includes('_')) && <p>ganaste</p>)
        }
        <button onClick={resetearJuego}>Resetear Juego</button>
    </div>
  )
}
