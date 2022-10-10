import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// import { OperacionesService } from 'src/app/services/operaciones.service';

@Component({
  selector: 'app-decodificar',
  templateUrl: './decodificar.component.html',
  styleUrls: ['./decodificar.component.css']
})
export class DecodificarComponent implements OnInit {

  constructor(
    private location: Location,
    // private op: OperacionesService
  ) { }

  ngOnInit(): void {
  }

  goToBack() {
    this.location.back();
  }

  // fulanito() {
  //   this.op.operacion1
  // }
}
