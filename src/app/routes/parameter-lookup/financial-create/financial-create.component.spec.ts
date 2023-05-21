import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialCreateComponent } from './financial-create.component';

describe('FinancialCreateComponent', () => {
  let component: FinancialCreateComponent;
  let fixture: ComponentFixture<FinancialCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
