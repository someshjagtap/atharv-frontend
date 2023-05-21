import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ParameterLookupRoutingModule } from './parameter-lookup-routing.module';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyCreateComponent } from './currency-create/currency-create.component';
import { FinancialYearListComponent } from './financial-year-list/financial-year-list.component';
import { FinancialCreateComponent } from './financial-create/financial-create.component';

const COMPONENTS: any[] = [CurrencyListComponent, CurrencyCreateComponent, FinancialYearListComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, ParameterLookupRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, FinancialCreateComponent],
})
export class ParameterLookupModule {}
