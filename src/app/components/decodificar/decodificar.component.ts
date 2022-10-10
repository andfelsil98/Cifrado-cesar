import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-decodificar',
  templateUrl: './decodificar.component.html',
  styleUrls: ['./decodificar.component.css']
})
export class DecodificarComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goToBack() {
    this.location.back();
  }
}
