import { Component } from '@angular/core';
@Component({
  //selector: '[app-servers]',
  //selector: '.app-severs',
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent {
  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
