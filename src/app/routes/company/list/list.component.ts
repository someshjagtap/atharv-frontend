import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from '@shared/services/helper.service';
import { LookupService } from '@shared/services/lookup.service';
import { Common } from '@shared/utils/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  columns!: MtxGridColumn[];
  isLoading = false;
  pageContext = { page: 0, previousPage: 0, itemsPerPage: 0, totalItems: 0, sort: 'id,desc' };
  search: any = {};
  list: any[] = [];

  constructor(
    private lookupService: LookupService,
    private router: Router,
    private translate: TranslateService,
    private helperService: HelperService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.search.page = this.pageContext.page;
    this.search.size = this.pageContext.itemsPerPage;
    this.search.sort = this.pageContext.sort;

    this.addColumn();
    this.addOperationsColumns();
    this.queryData();
  }

  queryData() {
    this.isLoading = true;
    this.search.page = this.pageContext.page;
    this.search.size = this.pageContext.itemsPerPage;
    this.search.sort = this.pageContext.sort;

    Common.removeEmptyFields(this.search);
    //  this.search['orgType.equals']=OrganisationDTO.orgTypeEnum.SOCIETY;
    this.lookupService
      .queryCompany(this.search)
      .subscribe((res: HttpResponse<any[]>) => {
        const headers = res.headers;
        this.pageContext.totalItems =
          headers != null ? Number(headers.get('x-total-count')?.toString()) : 0;
        let temp: any[] = [];
        this.list = res.body != null ? res.body : temp;
        this.isLoading = false;
      });
  }

  addColumn() {
    this.columns = [
      { header: this.translate.stream('tableHeader.id'), field: 'id' },
      { header: this.translate.stream('tableHeader.companyName'), field: 'companyName' },
      { header: this.translate.stream('tableHeader.branchcode'), field: 'branchcode' },
      { header: this.translate.stream('tableHeader.branchType'), field: 'branchType' },
      { header: this.translate.stream('tableHeader.phone'), field: 'phone' },
      { header: this.translate.stream('tableHeader.email'), field: 'email' },
      {
        header: this.translate.stream('tableHeader.status'),
        field: 'isActivate',
        type: 'tag',
        tag: {
          true: { text: 'Active', color: 'green-100' },
          false: { text: 'Inactive', color: 'red-100' },
        },
      },
    ];
  }

  addOperationsColumns() {
    this.columns.push({
      header: this.translate.stream('tableHeader.operation'),
      field: 'operation',
      width: '230px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'basic',
          icon: 'edit',
          tooltip: 'Edit',
          click: record => this.onEdit(record)
        },
        {
          type: 'basic',
          text: this.translate.stream('tableHeaderOperation.delete'),
          icon: 'delete',
          tooltip: this.translate.stream('tableHeaderOperation.delete'),
          color: 'warn',
          pop: {
            title: this.translate.stream('tableHeaderOperation.confirm_delete'),
            closeText: this.translate.stream('tableHeaderOperation.close'),
            okText: this.translate.stream('tableHeaderOperation.ok'),
          },
          click: () => alert('delete'),
        }
      ],
    });
  }

  onEdit(record: any): void {
    this.router.navigateByUrl('/company/edit/' + record.id);
  }

  changeSort(e: any) {
    this.pageContext.sort = e.active + ',' + e.direction;
    this.pageContext.page = 0;
    this.queryData();
  }

  onPageChange(e: any) {
    this.pageContext.page = e.pageIndex;
    this.pageContext.previousPage = e.previousPageIndex;
    this.pageContext.itemsPerPage = e.pageSize;
    this.queryData();
  }

  onSearch(reset: any) {
    if (reset) {
      this.search = {};
    }
    this.queryData();
  }

  previous() {
    this.location.back();
  }

  getMyIndex(index: number): number {
    if (this.pageContext.page > 0) {
      return this.pageContext.page * this.pageContext.itemsPerPage + index;
    }
    return index;
  }

  navigateToCreate(){
    this.router.navigateByUrl('/company/create');
  }
}