  const cifrar = document.getElementById('img-cifrar'); 

const printCifra  = () => {
    const boxPrint = document.getElementById('saludo');
    let textCifra = document.getElementById('text-cifra');
    let offsetone = document.getElementById('off-setone');
    let offsetone1  = parseInt(offsetone.value);
    let textCifra1 = textCifra.value.toUpperCase()
    const textCifrado = window.cipher.encode(offsetone1,textCifra1)
    boxPrint.innerHTML = textCifrado;  
    } 

    cifrar.addEventListener('click',printCifra);

    //button1.addEventListener('click', () => {
//      window.prueba.perrito()
    //})*/