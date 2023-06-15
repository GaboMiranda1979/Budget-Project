import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-bill',
  templateUrl: './enter-bill.component.html',
  styleUrls: ['./enter-bill.component.css']
})
export class EnterBillComponent implements OnInit{
billName: string;
amount: number;
formError: boolean;
textError: string;

constructor(private _budgetService: BudgetService){
  this.billName = '';
  this.amount = 0;
  this.formError = false;
  this.textError = ''
}

  ngOnInit(): void {

  }

  addBill(){

if(this.amount > this._budgetService.balance){
  this.formError = true;
  this.textError = 'Amount is greater than your balance';
  return;
}

if(this.billName === '' || this.amount <= 0){
  this.formError = true;
  this.textError = 'Name or Amount Error'
} else {

  //create object

const BILL = {
  name: this.billName,
  amount: this.amount
}
this._budgetService.addBill(BILL);

//reset form
  this.formError = false;
  this.billName = '';
  this.amount = 0;
}
  }

}
