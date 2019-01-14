import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuStatus = true;

  constructor() { }

  onMenuToggle(event: boolean) {
    this.menuStatus = event;
  }
}
