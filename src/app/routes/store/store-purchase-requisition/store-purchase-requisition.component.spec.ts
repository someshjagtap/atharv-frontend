import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePurchaseRequisitionComponent } from './store-purchase-requisition.component';

describe('StorePurchaseRequisitionComponent', () => {
  let component: StorePurchaseRequisitionComponent;
  let fixture: ComponentFixture<StorePurchaseRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePurchaseRequisitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePurchaseRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
