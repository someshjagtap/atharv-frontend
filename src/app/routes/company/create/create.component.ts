import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '@shared/services/helper.service';
import { OperationService } from '@shared/services/operation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  companyDTO: any ={};
  stateList: any = [{id: 1, name: 'Maharashtra'}];
  districtList: any = [{id: 1, name: 'Aurangabad'}];
  talukaList: any = [{id: 1, name: 'Sillod'}];

  constructor(
    private operationService: OperationService,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ details }) => {
      if (details) {
        this.companyDTO = details;
      }
    })
  }

  save(){
    if (this.companyDTO.id != undefined) {
      this.subscribeToSaveResponse(this.operationService.updateCompany(this.companyDTO));
    } else {
      this.subscribeToSaveResponse(this.operationService.createCompany(this.companyDTO));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<any>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      (error) => this.onSaveError(error.body)
    );
  }

  protected onSaveSuccess(): void {
    this.helperService.showSuccess('Success');
    this.previousState();
  }

  onSaveError(error: any): void {
    this.helperService.showErrorMessage(error);
  }

  previousState(){
    this.location.back();
  }
}
