import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrderRequisitionComponent } from './purchase-order-requisition/purchase-order-requisition.component';
import { PurchaseOrderRequisitionApprovalGMComponent } from './purchase-order-requisition-approval-gm/purchase-order-requisition-approval-gm.component';
import { PurchaseOrderRequisitionApprovalHODComponent } from './purchase-order-requisition-approval-hod/purchase-order-requisition-approval-hod.component';

const routes: Routes = [
  { path: 'purchaseOrderRequisition', component: PurchaseOrderRequisitionComponent },
  { path: 'purchaseOrderRequisitionApprovalHOD', component: PurchaseOrderRequisitionApprovalHODComponent },
  { path: 'purchaseOrderRequisitionApprovalGM', component: PurchaseOrderRequisitionApprovalGMComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseRoutingModule { }
