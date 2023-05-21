import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-financial-create',
  templateUrl: './financial-create.component.html',
  styleUrls: ['./financial-create.component.scss']
})
export class FinancialCreateComponent {
  constructor(
    public dialogRef: MatDialogRef<FinancialCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){

  }
}
