
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './components/bills/bills.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';


const routes: Routes = [
  {path:'', redirectTo: '/enterBudget', pathMatch: 'full'},
  {path: 'enterBudget', component: EnterBudgetComponent},
  {path: 'bills', component: BillsComponent},
  {path: '**', redirectTo: '/enterBudget', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
