import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // styleUrls: [ './app.component.css' ]
  styles: [
    `
      h1 {
        color: dodgerBlue;
      }
    `
  ]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
