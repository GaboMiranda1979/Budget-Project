import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
budget: number;
balance: number;
private bills$ = new Subject<any>();

  constructor() {
    this.budget = 0;
    this.balance = 0;
   }

addBill( bill: any){
  this.balance = this.balance - bill.amount;
  this.bills$.next(bill);
}

getBills(): Observable<any>{
  return this.bills$.asObservable();
}

}
