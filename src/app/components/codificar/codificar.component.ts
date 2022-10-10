import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codificar',
  templateUrl: './codificar.component.html',
  styleUrls: ['./codificar.component.css']
})
export class CodificarComponent implements OnInit {

  word: String[] = [];
  textField: String = "";

  //textField = new FormControl ("", Validators.required)

  constructor() { }
  ngOnInit(): void {

  }

  findWord() {
    this.word = this.textField.split("");
    console.log(this.textField.split(""));
  }

  clearWord() {
    this.word = [];
    this.textField = '';
  }

}
