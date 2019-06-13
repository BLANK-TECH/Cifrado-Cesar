window.cipher = {
  encode: (offsetone, textCifra) => {
    let nuevaPosicion = [];
    let cifrada=[];
    let ascii = [];
      for(i=0;i<textCifra.length;i++){
        ascii[i]=textCifra.charCodeAt(i);
        nuevaPosicion [i] = ((ascii[i]- 65 + offsetone)%26)+65;
        cifrada += String.fromCharCode(nuevaPosicion[i]);
      }
      console.log(cifrada)
      return cifrada;
  }
    // ... 
};
