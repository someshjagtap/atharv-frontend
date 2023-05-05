import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { ControlsOf, IProfile } from '@shared';

@Component({
  selector: 'app-purchase-order-requisition',
  templateUrl: './purchase-order-requisition.component.html',
  styleUrls: ['./purchase-order-requisition.component.scss']
})
export class PurchaseOrderRequisitionComponent {
  reactiveForm2 = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    city: [''],
    address: [''],
    company: [''],
    tele: [''],
    website: [''],
    date: [''],
  });

  constructor(
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService
  ) {}

  getErrorMessage(form: FormGroup<ControlsOf<IProfile>>) {
    return form.get('email')?.hasError('required')
      ? 'validations.required'
      : form.get('email')?.hasError('email')
      ? 'validations.invalid_email'
      : '';
  }
}
