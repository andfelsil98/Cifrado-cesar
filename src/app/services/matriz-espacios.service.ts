import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrizEspaciosService {

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  recibirDatos(data:any) {
    console.log("entro al servicio",data)
    this.change.emit(data);
  }
}
