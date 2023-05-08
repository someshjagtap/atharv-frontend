import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { BranchRoutingModule } from './branch-routing.module';
import { ListComponent } from './list/list.component';

const COMPONENTS: any[] = [
  ListComponent
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    BranchRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class BranchModule { }
