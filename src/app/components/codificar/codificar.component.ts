import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/services/operaciones.service';
import { MatrizEspaciosService } from 'src/app/services/matriz-espacios.service';

@Component({
  selector: 'app-codificar',
  templateUrl: './codificar.component.html',
  styleUrls: ['./codificar.component.css']
})
export class CodificarComponent implements OnInit {
  dropField: number = 0;
  textField: String = "";
  cod_result: String= '';
  decod_result: String= '';
  matriz_espacios: any = [];

  lista:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

  constructor(
    private operaciones: OperacionesService,
    private espacios: MatrizEspaciosService
  ) { }
  ngOnInit(): void {
    this.espacios.change
    .subscribe(data => {
      // console.log(`hola ${data}`)
      this.matriz_espacios = data;
      console.log(this.matriz_espacios)
    })
  }

  codificar() {
    this.textField = this.textField.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    // this.textField = this.textField.replace(" ", "1");
    console.log(this.textField);
    this.cod_result = this.operaciones.cifrar(this.textField.toLowerCase(), Number(this.dropField));
    this.decod_result = '';
  }

  decodificar() {
    console.log(this.dropField)
    this.decod_result = this.operaciones.descifrar(this.cod_result,Number(this.dropField), this.matriz_espacios);
    // this.textField = this.textField.replace("1", " ");
    this.cod_result = '';
  }


  clearWord() {
    this.textField = '';
    this.cod_result = '';
    this.decod_result = '';
    this.dropField = 0;

  }

}
