function Inicializar (){
    
    const cifrar = document.getElementById('img-cifrar');
    cifrar.addEventListener('click',printCifra);

    

}
function InicializarInvitado (){

    const decifrar = document.getElementById('img-decifrar');
    decifrar.addEventListener('click',printDecifra);
}

const printCifra  = () => {
    const boxPrint = document.getElementById('saludo');
    let textCifra = document.getElementById('text-cifra');
    let offsetone = document.getElementById('off-setone');
    offsetone  = parseInt(offsetone.value)
    textCifra = textCifra.value.toUpperCase()
    const textCifrado = window.cipher.encode(offsetone,textCifra)
    boxPrint.innerHTML = textCifrado;  
    } 

    
    const printDecifra = () => {
        let textDecifra = document.getElementById('text-decifra');
        let offsetTwo = document.getElementById('off-setTwo');
        const boxPrintDecifra = document.getElementById('txt-decifrado');
        offsetTwo = parseInt(offsetTwo.value)
        textDecifra = textDecifra.value.toUpperCase()
        const textDecifrado = window.cipher.decode(offsetTwo,textDecifra)
        boxPrintDecifra.innerHTML = textDecifrado;
    }
    

/*/llamo los elementos necesarios para mi funcion cifrar
let textCifra = document.getElementById('text-cifra');
let offsetone = document.getElementById('off-setone');
const cifrar = document.getElementById('img-cifrar');
const boxPrint = document.getElementById('saludo');




    cifrar.addEventListener('click',printCifra);

//llamo los elementos necesarios para mi funcion decifrar
let textDecifra = document.getElementById('text-decifra');
let offsetTwo = document.getElementById('off-setTwo');
const decifrar = document.getElementById('img-decifrar');
const boxPrintDecifra = document.getElementById('txt-decifrado');

const printDecifra = () => {
    offsetTwo = parseInt(offsetTwo.value)
    textDecifra = textDecifra.value.toUpperCase()
    const textDecifrado = window.cipher.decode(offsetTwo,textDecifra)
    boxPrintDecifra.innerHTML = textDecifrado;
}
   
    decifrar.addEventListener('click',printDecifra);

    //button1.addEventListener('click', () => {
//      window.prueba.perrito()
    //})*/