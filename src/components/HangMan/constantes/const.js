//export const alphabets = ["A", "B", "C", "D", "E", "F", "G",
//    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
//    "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

//implementar ayuda al costado que aparezca cada cierto tiempo..

export const words = ['pinguino', 'tigre', 'oso', 'dinosaurio', 'gato', 'labrador', 'murcielago'];

export const obtenerPalabraRandom = () => {
    const randomIdx = Math.floor(Math.random() * words.length);
    return words[randomIdx];
}