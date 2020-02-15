import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarningsComponent } from './earnings/earnings.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';



const routes: Routes = [
  {
    path: '' , component: ReportsComponent , children: [

      { path : 'transaction' , component: TransactionsComponent},
      { path : '' , pathMatch: 'full' , redirectTo: 'earning'},
      { path: 'earning' , component: EarningsComponent },
    ]

  }
 ];

@NgModule({
  declarations: [EarningsComponent, TransactionsComponent, ReportsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class ReportsModule { }
