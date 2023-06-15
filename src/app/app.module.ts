import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { BillsComponent } from './components/bills/bills.component';
import { EnterBillComponent } from './components/bills/enter-bill/enter-bill.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { BillsDetailsComponent } from './components/bills/bills-details/bills-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    EnterBudgetComponent,
    EnterBillComponent,
    BillsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
