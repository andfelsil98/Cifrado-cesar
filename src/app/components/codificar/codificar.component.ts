import { Component, OnInit } from '@angular/core';
import { OperacionesService } from 'src/app/services/operaciones.service';

@Component({
  selector: 'app-codificar',
  templateUrl: './codificar.component.html',
  styleUrls: ['./codificar.component.css']
})
export class CodificarComponent implements OnInit {

  textField: String = "";
  cod_result: String= '';
  decod_result: String= '';

  constructor(
    private operaciones: OperacionesService
  ) { }
  ngOnInit(): void {
  }

  codificar() {
    this.cod_result = this.operaciones.cifrar(this.textField.toLowerCase(), 3);
    this.decod_result = '';
  }

  decodificar() {
    this.decod_result = this.operaciones.descifrar(this.cod_result, 3);
    this.cod_result = '';
  }


  clearWord() {
    console.log('hola estoy entrando')
    this.textField = '';
    this.cod_result = '';
    this.decod_result = '';

  }

}
