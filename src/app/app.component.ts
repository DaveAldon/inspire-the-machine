import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {

  get numImages(): number {
    return this.element.nativeElement.querySelectorAll('img').length;
  }

  numArr = Array.from({length: 1}, () => Math.floor(Math.random() * 999));

  constructor(public element: ElementRef) {}

}