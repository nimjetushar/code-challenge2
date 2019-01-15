import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuStatus = false;

  constructor() { }

  onMenuToggle(event: boolean) {
    this.menuStatus = event;
  }
}
