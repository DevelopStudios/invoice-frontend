import { Component } from '@angular/core';
import { Invoice } from 'src/ models/invoice.model';
import { Status } from 'src/ models/status.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-global-filter',
  templateUrl: './global-filter.component.html',
  styleUrls: ['./global-filter.component.scss']
})
export class GlobalFilterComponent {
  invoices: Invoice[]=[];
  statuses: Status[]=[];
  showLoader: Boolean = false;
  constructor(private account:AccountService ){

  }
  ngOnInit(){
    this.showLoader = true
    this.account.getInvoices().subscribe((value:any) => {
      this.invoices = value;
      this.showLoader = false;
    });
    this.account.getStatuses().subscribe((value:any) => {
      this.statuses = value;
    });
  }

  checkStatusId(id:number){
    return this.statuses.filter(value => value?.id === id)[0]?.status;
  }
}
