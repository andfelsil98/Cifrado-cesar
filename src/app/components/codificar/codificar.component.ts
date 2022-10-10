import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codificar',
  templateUrl: './codificar.component.html',
  styleUrls: ['./codificar.component.css']
})
export class CodificarComponent implements OnInit {

  dividedWord: String[] = [];
  textField: String = "";
  joinedWord: String = "";

  //textField = new FormControl ("", Validators.required)

  constructor() { }
  ngOnInit(): void {
  }

  divideWord() {
    this.dividedWord = this.textField.split("");
    this.joinedWord = '';
    console.log(this.textField.split(""));
  }

  clearWord() {
    this.dividedWord = [];
    this.textField = '';
    this.joinedWord = '';
  }

  joinWord() {
    this.joinedWord = this.dividedWord.toString();
    this.joinedWord = this.joinedWord.replace(/,/g, "");
    this.dividedWord = [];
  }

}
