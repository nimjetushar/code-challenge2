import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-palet',
  templateUrl: './command-palet.component.html',
  styleUrls: ['./command-palet.component.scss']
})
export class CommandPaletComponent implements OnInit {

  commandPalets: Array<{ label: string; className: string; }>;

  constructor() { }

  ngOnInit() {
    this.commandPalets = [
      {
        label: 'Inprogress',
        className: 'inprogress'
      },
      {
        label: 'Success',
        className: 'success'
      },
      {
        label: 'Rejected',
        className: 'rejected'
      },
      {
        label: 'Extra Status',
        className: 'extra-status'
      },
      {
        label: 'Other',
        className: 'other'
      }
    ];
  }

}
