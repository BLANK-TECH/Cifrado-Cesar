window.cipher = {
  encode: (offsetone, textCifra) => {
    let nuevaPosicion = [];
    let cifrada=[];
    let ascii = [];
      for(let i=0;i<textCifra.length;i++){
        ascii[i]=textCifra.charCodeAt(i);
        nuevaPosicion [i] = ((ascii[i]- 65 + offsetone)%26)+65;
        cifrada += String.fromCharCode(nuevaPosicion[i]);
      }
      /*console.log(cifrada)*/
      return cifrada;
  },
  decode: (offsetTwo, textDecifra) => {
    let nuevaPosicion = [];
    let decifrada=[];
    let ascii = [];
      for(let i=0;i<textDecifra.length;i++){
        ascii[i]=textDecifra.charCodeAt(i);
        nuevaPosicion [i] = ((ascii[i]- 65 - offsetTwo)%26)+65;
        decifrada += String.fromCharCode(nuevaPosicion[i]);
      }
      /*console.log(decifrada)*/
      return decifrada;
  } 
};
