export const chequeoGanador = (arr, ganador, setGanador) => {
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