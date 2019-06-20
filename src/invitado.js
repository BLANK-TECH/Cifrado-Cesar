const decifrar = document.getElementById('img-decifrar');


const printDecifra = () => {
    let textDecifra = document.getElementById('text-decifra');
    let offsetTwo = document.getElementById('off-setTwo');
    const boxPrintDecifra = document.getElementById('txt-decifrado');
    offsetTwo = parseInt(offsetTwo.value)
    textDecifra = textDecifra.value //.toUpperCase()
    const textDecifrado = window.cipher.decode(offsetTwo,textDecifra)
    boxPrintDecifra.innerHTML = textDecifrado;
}

decifrar.addEventListener('click',printDecifra);