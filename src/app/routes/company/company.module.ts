import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CompanyRoutingModule } from './company-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

const COMPONENTS: any[] = [
  ListComponent,
  CreateComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    CompanyRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class CompanyModule { }
