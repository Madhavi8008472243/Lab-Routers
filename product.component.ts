import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    <p>
      product works!
    </p>
    <ul class="item">
  <li (click)="onSelect(product)"  *ngFor="let product of productlist">
    <span class="badge">{{product.id}}</span> {{product.name}}
  </li>
</ul>
    `,
  styles: []
})
export class ProductComponent implements OnInit {

  public productlist = [
    {"id": 1, "name": "pencils"},
    {"id": 2, "name": "Bags"},
    {"id": 3, "name": "Car"},
    {"id": 4, "name": "bus"},
    {"id": 5, "name": "shirts"}
  ]

  constructor(private rounter: Router) { }

  ngOnInit() {

  }

  onSelect(product){
    // from neviate from code to rooute we need router service
    this.rounter.navigate(['/productlist', product.id]);
  }
}



