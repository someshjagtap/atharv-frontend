import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-currency-create',
  templateUrl: './currency-create.component.html',
  styleUrls: ['./currency-create.component.scss']
})
export class CurrencyCreateComponent {

  constructor(
    public dialogRef: MatDialogRef<CurrencyCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){

  }

}
