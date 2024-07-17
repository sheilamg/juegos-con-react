import React, { useState } from 'react'
import { chequeoGanador } from './chequeoGanador'
import './TicTacToe.css'

export const Matriz = () => {
  const [ficha, setFicha] = useState('X')
  const [celdas, setCeldas] = useState(Array(9).fill(""))
  const [ganador, setGanador] = useState()

  const chequeoGanador = (arr) => {
    let combinaciones = {
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let c in combinaciones) {
      combinaciones[c].forEach((patron) => {
        if (
          arr[patron[0]] === "" ||
          arr[patron[1]] === "" ||
          arr[patron[2]] === ""
        ) {
        } else if (
          arr[patron[0]] === arr[patron[1]] &&
          arr[patron[1]] === arr[patron[2]]
        ) {
          setGanador(arr[patron[0]]);
        }
      });
    }
  };  

  const manejarClick = (num) => {
    if (ganador || celdas[num] !== "") return;

    let arr = [...celdas];
    if (ficha === "X") {
      arr[num] = "X";
      setFicha("O");
    } else {
      arr[num] = "O";
      setFicha("X");
    }
    chequeoGanador(arr);
    setCeldas(arr);
    //if (!arr.includes("") && !ganador) {
    //  setIsDraw(true);
    //}
  };

  const Cell = ({ num }) => {
    const cellValue = celdas[num];
    const cellClassName = cellValue ? `cell cell-${cellValue}` : "cell";

    return (
      <div className={cellClassName} onClick={() => manejarClick(num)}>
        {cellValue}
      </div>
    );
  };

  const handleReset = () => {
    setGanador();
    //setIsDraw(false);
    setCeldas(Array(9).fill(""));
  };

  return (
    <>
      <div className='container'>  
      <div>
        <Cell num={0} />
        <Cell num={1} />
        <Cell num={2} />
      </div>
      <div>
        <Cell num={3} />
        <Cell num={4} />
        <Cell num={5} />
      </div>
      <div>
        <Cell num={6} />
        <Cell num={7} />
        <Cell num={8} />
      </div>
      </div>
      <button className='reset-button' onClick={handleReset}>
        Reset  
      </button>  
    </>
  )
}
