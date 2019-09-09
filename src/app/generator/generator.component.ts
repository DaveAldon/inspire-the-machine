import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})

export class GeneratorComponent  {
  
  OnInit() {}

  reGenerate() {
    this.numArr = getId()
  }

  numArr = getId()
  constructor() {}
}

// Get a random id. Keeping it as an array for future use
function getId() {
  return Array.from({length: 1}, () => Math.floor(Math.random() * 999));
}