import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.scss']
})
export class InvoiceItemsComponent implements OnInit {
  @Input()invoice_items: any;
  @Input()items: any;
  constructor(){
  }

  checkName(id:any) {
    let selection = this.items?.filter((value:any) => {
      return value.id === id;
    });
    return selection[0].name;
  }

  checkQty(id:any) {
    let selection = this.items?.filter((value:any) => {
      return value.id === id;
    });
    return selection[0].qty;
  }

  checkPrice(id:any) {
    let selection = this.items?.filter((value:any) => {
      return value.id === id;
    });
    return selection[0].price;
  }

  checkTotal(id:any) {
    let selection = this.items?.filter((value:any) => {
      return value.id === id;
    });
    return selection[0].total;
  }

  ngOnInit() {
  }

}
