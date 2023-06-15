import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-bills-details',
  templateUrl: './bills-details.component.html',
  styleUrls: ['./bills-details.component.css']
})
export class BillsDetailsComponent implements OnInit, OnDestroy{

subscription: Subscription;
budget: number;
balance: number;
billsDetails: any[] = [];

  constructor(private _budgetService: BudgetService){
    this.budget = 0;
    this.balance = 0;
    this.subscription = this._budgetService.getBills().subscribe(data =>{
      this.balance = this.balance - data.amount;
      this.billsDetails.push(data);
    })
  }

  ngOnInit(): void {
this.budget = this._budgetService.budget;
this.balance = this._budgetService.balance;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  colorBalance(){
    if(this.budget / 4 > this.balance){
      return'alert alert-danger';
    }else if(this.budget/2 > this.balance){
      return'alert alert-warning';
    }else{
      return 'alert alert-secondary'
    }
  }

}
