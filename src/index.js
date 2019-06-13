//llamo los elementos necesarios para mi funcion
let textCifra = document.getElementById('text-cifra');
let offsetone = document.getElementById('off-setone');
const cifrar = document.getElementById('img-cifrar');
const boxPrint = document.getElementById('saludo');


const printCifra  = () => {
    offsetone  = parseInt(offsetone.value)
    textCifra = textCifra.value.toUpperCase()
    const textCifrado = window.cipher.encode(offsetone,textCifra)
    boxPrint.innerHTML = textCifrado;  
    }
      
    cifrar.addEventListener('click',printCifra) 

    //button1.addEventListener('click', () => {
//      window.prueba.perrito()
    //})
     