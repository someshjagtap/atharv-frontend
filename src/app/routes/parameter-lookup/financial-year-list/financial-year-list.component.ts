import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { TranslateService } from '@ngx-translate/core';
import { HelperService } from '@shared/services/helper.service';
import { LookupService } from '@shared/services/lookup.service';
import { Common } from '@shared/utils/common';
import { CurrencyCreateComponent } from '../currency-create/currency-create.component';
import { FinancialCreateComponent } from '../financial-create/financial-create.component';

@Component({
  selector: 'app-financial-year-list',
  templateUrl: './financial-year-list.component.html',
  styleUrls: ['./financial-year-list.component.scss']
})
export class FinancialYearListComponent {
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
    private location: Location,
    public dialog: MatDialog

  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.search.page = this.pageContext.page;
    this.search.size = this.pageContext.itemsPerPage;
    this.search.sort = this.pageContext.sort;

    this.addColumn();
    // this.addOperationsColumns();
    this.queryData();
  }

  addColumn() {
    this.columns = [
      { header: this.translate.stream('tableHeader.id'), field: 'id' },
      { header: 'Number', field: 'code' },
      { header: 'Revenue Type', field: 'name' },
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
          // click: record => this.onEdit(record)
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

  openDialog(){
    const dialogRef = this.dialog.open(FinancialCreateComponent, {
      // height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
