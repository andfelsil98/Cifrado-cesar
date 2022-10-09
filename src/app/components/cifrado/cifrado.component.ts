import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-cifrado',
  templateUrl: './cifrado.component.html',
  styleUrls: ['./cifrado.component.css']
})
export class CifradoComponent implements OnInit {
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

}
