import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderRequisitionApprovalGMComponent } from './purchase-order-requisition-approval-gm.component';

describe('PurchaseOrderRequisitionApprovalGMComponent', () => {
  let component: PurchaseOrderRequisitionApprovalGMComponent;
  let fixture: ComponentFixture<PurchaseOrderRequisitionApprovalGMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderRequisitionApprovalGMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOrderRequisitionApprovalGMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
