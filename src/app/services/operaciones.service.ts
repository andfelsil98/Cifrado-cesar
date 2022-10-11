import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
  abc: String = "abcdefghijklmnopqrstuvwxyz";
  texto_cifrado: String = "";
  texto_descifrado: String = "";
  suma = 0;
  resta = 0;
  modulo = 0;

  constructor() { }

  cifrar(cadena: String, clave: number){
    this.texto_cifrado = '';
    for (let letra of cadena) {
      // console.log(letra);

      this.suma = this.abc.indexOf(letra) + clave; //lo que hace es tomar todas las palabras del abecedario y buscar en ese orden cada una de las letras (expecificamente su indice) que corresponde a el input y sumarle la clave
      // console.log(this.suma);
      this.modulo = Math.trunc(this.suma) % this.abc.length;
      this.texto_cifrado = this.texto_cifrado + String(this.abc[this.modulo]);
      // console.log(this.texto_cifrado);
  }
  return this.texto_cifrado;
  }



  descifrar(cadena: String, clave: number){
    this.texto_descifrado = '';
    for (let letra of cadena) {
      // console.log(letra);

      this.resta = this.abc.indexOf(letra) - clave; //lo que hace es tomar todas las palabras del abecedario y buscar en ese orden cada una de las letras (expecificamente su indice) que corresponde a el input y sumarle la clave
      // console.log(this.resta);
      this.modulo = Math.trunc(this.resta) % this.abc.length;
      this.texto_descifrado = this.texto_descifrado + String(this.abc[this.modulo]);
      // console.log(this.texto_descifrado);
  }
  return this.texto_descifrado;
  }

}
