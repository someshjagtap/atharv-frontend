import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  securityUserDTO: any = {};
  branchList: any = [];
  organizationList: any = [];
  securityRoleList: any = [];
  selectedBranchId: number = 0;
  selectorgId: number = 0;
  selectedRoleId: number = 0;

  save(){

  }

  previousState(){

  }
}
