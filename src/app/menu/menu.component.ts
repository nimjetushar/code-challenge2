import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<boolean>();

  isMenuOpen = false;
  menuList: Array<{ label: string, icon: string }>;

  constructor() { }

  ngOnInit() {
    this.menuList = [
      { label: 'Home', icon: 'fa-home' },
      { label: 'Library', icon: 'fa-list' },
      { label: 'Self Service Utility', icon: 'fa-cog' }
    ];

    this.menuToggle.emit(this.isMenuOpen);
  }

  onMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.emit(this.isMenuOpen);
  }

}
