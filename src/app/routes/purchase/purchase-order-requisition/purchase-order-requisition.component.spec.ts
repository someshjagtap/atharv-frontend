import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderRequisitionComponent } from './purchase-order-requisition.component';

describe('PurchaseOrderRequisitionComponent', () => {
  let component: PurchaseOrderRequisitionComponent;
  let fixture: ComponentFixture<PurchaseOrderRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderRequisitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOrderRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
