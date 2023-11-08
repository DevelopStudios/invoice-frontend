import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/ models/invoice.model';
import { Status } from 'src/ models/status.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-global-list-item',
  templateUrl: './global-list-item.component.html',
  styleUrls: ['./global-list-item.component.scss']
})
export class GlobalListItemComponent implements OnInit {
  invoice: any;
  items: any;
  statuses: Status[]=[];
  constructor(private route:ActivatedRoute, private account:AccountService){
  }

  checkStatusId(id:number) {
    return this.statuses.filter(value => value?.id === id)[0]?.status;
  }

  ngOnInit(){
    this.account.getStatuses().subscribe((value:any) => {
      this.statuses = value;
    });

    this.account.getInvoiceItems().subscribe((value:any)=> {
      this.items = value;
    });

    this.route.params.subscribe((value:any) => {
      this.account.getInvoice(value.id).subscribe((obj) => {
        this.invoice = obj;
      });
    });
  }
}
