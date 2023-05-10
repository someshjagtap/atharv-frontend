import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { OperationService } from '@shared/services/operation.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  branchDTO: any =[];
  talukaList: any=[];
  districtList: any=[];
  stateList: any=[];
  regionList: any=[];
  organizationList: any=[];
  selectedtalukaId: number| undefined;
  selectedDistrictId: number| undefined;
  selectedstateId: number| undefined;
  selectedOrgId: number| undefined;

  constructor(
    private operationService: OperationService,
    private location: Location
  ) {}

  save(){

  }

  previousState(){
    this.location.back();
  }
}
