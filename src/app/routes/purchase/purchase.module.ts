import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseOrderRequisitionComponent } from './purchase-order-requisition/purchase-order-requisition.component';
import { PurchaseOrderRequisitionApprovalGMComponent } from './purchase-order-requisition-approval-gm/purchase-order-requisition-approval-gm.component';
import { PurchaseOrderRequisitionApprovalHODComponent } from './purchase-order-requisition-approval-hod/purchase-order-requisition-approval-hod.component';

const COMPONENTS: any[] = [
  PurchaseOrderRequisitionComponent,
  PurchaseOrderRequisitionApprovalGMComponent,
  PurchaseOrderRequisitionApprovalHODComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, PurchaseRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class PurchaseModule {}
