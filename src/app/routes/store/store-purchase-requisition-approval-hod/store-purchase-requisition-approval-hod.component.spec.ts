import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePurchaseRequisitionApprovalHODComponent } from './store-purchase-requisition-approval-hod.component';

describe('StorePurchaseRequisitionApprovalHODComponent', () => {
  let component: StorePurchaseRequisitionApprovalHODComponent;
  let fixture: ComponentFixture<StorePurchaseRequisitionApprovalHODComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePurchaseRequisitionApprovalHODComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePurchaseRequisitionApprovalHODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
