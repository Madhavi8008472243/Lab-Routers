import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `<h3>you selected  id {{ productId}}</h3>`,
  styleUrls: []
})

export class ProductdetailComponent implements OnInit {

  public productId; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
  }
}
