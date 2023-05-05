import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderRequisitionApprovalHODComponent } from './purchase-order-requisition-approval-hod.component';

describe('PurchaseOrderRequisitionApprovalHODComponent', () => {
  let component: PurchaseOrderRequisitionApprovalHODComponent;
  let fixture: ComponentFixture<PurchaseOrderRequisitionApprovalHODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderRequisitionApprovalHODComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOrderRequisitionApprovalHODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
