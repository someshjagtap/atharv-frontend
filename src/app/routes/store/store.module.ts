import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';
import { StorePurchaseRequisitionComponent } from './store-purchase-requisition/store-purchase-requisition.component';
import { StorePurchaseRequisitionApprovalHODComponent } from './store-purchase-requisition-approval-hod/store-purchase-requisition-approval-hod.component';

const COMPONENTS: any[] = [
  StorePurchaseRequisitionComponent,
  StorePurchaseRequisitionApprovalHODComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, StoreRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class StoreModule {}
