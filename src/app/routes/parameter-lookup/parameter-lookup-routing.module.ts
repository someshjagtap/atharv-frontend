import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { FinancialYearListComponent } from './financial-year-list/financial-year-list.component';

const routes: Routes = [
  {path: 'currency-list', component: CurrencyListComponent},
  {path: 'financial-year', component: FinancialYearListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParameterLookupRoutingModule { }
