import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StockRoutingModule } from './stock-routing.module';

const COMPONENTS: any[] = [];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    StockRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class StockModule { }
