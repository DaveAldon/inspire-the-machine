import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [ `
    ngui-in-view {
      min-height: 300px;
    }
    .num-images { 
      position: fixed; padding: 5px;
      bottom: 0; right: 0; background: #333;color: #fff;
    }` ]
})
export class AppComponent  {

  get numImages(): number {
    return this.element.nativeElement.querySelectorAll('img').length;
  }

  numArr = Array.from(Array(100), (_,x) => x);

  constructor(public element: ElementRef) {}

}