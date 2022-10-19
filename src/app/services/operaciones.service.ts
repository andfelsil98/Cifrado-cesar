import { ConditionalExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { MatrizEspaciosService } from 'src/app/services/matriz-espacios.service';

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
  flag = 0;

  constructor(
    private espacios: MatrizEspaciosService
  ) { }

  ngOnInit(): void {

  }

  cifrar(cadena: string, clave: number){
    //console.log(this.abc.length)
    // console.log(clave);
    cadena = this.transformacionSinEspacios(cadena);
    // console.log(cadena)
    this.texto_cifrado = '';
    // console.log(this.texto_cifrado)
    for (let letra of cadena) {
      //console.log(clave);
      this.suma = this.abc.indexOf(letra)  + clave; //lo que hace es tomar todas las palabras del abecedario y buscar en ese orden cada una de las letras (expecificamente su indice) que corresponde a el input y sumarle la clave
      if (this.suma > this.abc.length){
        this.flag = this.flag +1;
        this.suma =this.abc.length - this.abc.indexOf(letra);
        this.suma = clave - this.suma;
      }
      console.log('bandera:',this.flag)
      console.log('suma:', this.suma);
      this.modulo = Math.trunc(this.suma) % this.abc.length;
      // console.log(this.modulo);
      this.texto_cifrado = this.texto_cifrado + String(this.abc[this.modulo]);
      //console.log(this.texto_cifrado);
  }
  return this.texto_cifrado;
  //return 'hola'
  }



  descifrar(cadena: String, clave: number, matriz: any){
    this.texto_descifrado = '';
    for (let letra of cadena) {
      //console.log(clave);

      this.resta = this.abc.indexOf(letra) - clave; //lo que hace es tomar todas las palabras del abecedario y buscar en ese orden cada una de las letras (expecificamente su indice) que corresponde a el input y sumarle la clave
      // console.log(this.resta);
      this.modulo = Math.trunc(this.resta) % this.abc.length;
      this.texto_descifrado = this.texto_descifrado + String(this.abc[this.modulo]);
      // console.log(this.texto_descifrado);
  }
    //console.log(this.transformacionConEspacios());
    this.texto_descifrado = this.transformacionConEspacios(this.texto_descifrado, matriz)
    return this.texto_descifrado;
  }

  transformacionSinEspacios(texto: string) {
    let matriz_espacios = [];
    // let matriz_mod = []
    // let recover_word = '';
    let word = texto;


      while (word.includes(' ')){
        let espacio = word.indexOf(' ');
        matriz_espacios.push(espacio + matriz_espacios.length);
        word = word.replace(' ','');
        //console.log(matriz_espacios);
      }
      this.espacios.recibirDatos(matriz_espacios);
      return word;
    }


  transformacionConEspacios(word: String, matriz: any) {
    let matriz_espacios = matriz;
    let word_mat = word.split('');
    console.log(word_mat);
    let recover_word = '';

    for (let i of matriz_espacios){
      console.log(i)
      word_mat.splice(i,0,' ');
      recover_word = word_mat.toString();
      recover_word = recover_word.replace(/,/g, '');
      // console.log(word_mat)
      // console.log(recover_word)
    }
    return recover_word;
  }

}
