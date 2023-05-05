import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorePurchaseRequisitionComponent } from './store-purchase-requisition/store-purchase-requisition.component';
import { StorePurchaseRequisitionApprovalHODComponent } from './store-purchase-requisition-approval-hod/store-purchase-requisition-approval-hod.component';

const routes: Routes = [
  { path: 'storePurchaseRequisitionComponent', component: StorePurchaseRequisitionComponent },
  {
    path: 'storePurchaseRequisitionApprovalHODComponent',
    component: StorePurchaseRequisitionApprovalHODComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
