import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `
    <p>
      category works!
    </p>
    <li *ngFor="let category of category">
    <span>{{category}}</span>
  `,
  styles: [
  ]
})
export class CategoryComponent implements OnInit {
      public category=[
      'Dress',
      'Vehicles',
      'Things'
]
  constructor() { }

  ngOnInit(): void {
  }
     
}
