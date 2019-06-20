window.cipher = {
  encode: (offsetone, textCifra) => {
    let nuevaPosicion = [];
    let cifrada=[];
    let ascii = [];
      for(let i=0;i<textCifra.length;i++){
        ascii[i]=textCifra.charCodeAt(i);
        if(ascii[i] >=65 && ascii[i] <=90){
          nuevaPosicion [i] = ((ascii[i]- 65 + offsetone)%26)+65;
          cifrada += String.fromCharCode(nuevaPosicion[i]);
        }
        else if(ascii[i] >= 97 && ascii[i] <= 122){
          nuevaPosicion [i] = ((ascii[i]- 97 + offsetone)%26)+97;
          cifrada += String.fromCharCode(nuevaPosicion[i]);
        }
        else{
          cifrada += String.fromCharCode(ascii[i]);
        }
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
        if(ascii[i] >=65 && ascii[i]<=90){
          nuevaPosicion [i] = (ascii[i] + 65 - offsetTwo) % 26 + 65;
          decifrada += String.fromCharCode(nuevaPosicion[i]);
        }
        else if(ascii[i] >= 97 && ascii[i] <= 122){
          nuevaPosicion [i] = (ascii[i] - 122 - offsetTwo) % 26 + 122;
          decifrada += String.fromCharCode(nuevaPosicion[i]);
        }
        else{
          decifrada += String.fromCharCode(ascii[i]);
        }
      }
      //console.log(decifrada);
      return decifrada;
  } 
};
