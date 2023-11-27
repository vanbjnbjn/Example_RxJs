import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  menus = [
    { id: 1, text: 'Overview', children:[
      {id: 2, text: 'Observable'},
      {id: 3, text: 'Operators'},
      {id: 4, text: 'Subscripton'},
      {id: 5, text: 'Subjects'},
      {id: 6, text: 'Observable'},
      {id: 7, text: 'Observable'},
    ]},
    {id: 8, text: 'Installation'}
  ];
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
