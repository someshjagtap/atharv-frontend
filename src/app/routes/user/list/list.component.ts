import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { TranslateService } from '@ngx-translate/core';
import { ITEMS_PER_PAGE } from '@shared/constants/pagination.constants';
import { HelperService } from '@shared/services/helper.service';
import { LookupService } from '@shared/services/lookup.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  pageContext = { page: 0, previousPage: 0, itemsPerPage: 0, totalItems: 0, sort: 'id,desc' };
  isLoading = true;
  search: any = {};
  list!: any[];
  columns!: MtxGridColumn[];
  userList: any;

  constructor(
    private lookupService: LookupService,
    private router: Router,
    private translate: TranslateService,
    private helperService: HelperService,
    private location: Location

  ) {
    this.pageContext.itemsPerPage = ITEMS_PER_PAGE;
    this.pageContext.totalItems = ITEMS_PER_PAGE;
  }

  ngOnInit(): void {
    this.defaultColumn();
    this.addOperationsColumns();
    this.queryData();
  }

  queryData() {}

  defaultColumn() {
    this.columns = [
      {
        header: this.translate.stream('tableHeader.id'),
        field: 'id',
      },
      {
        header: this.translate.stream('tableHeader.firstName'),
        field: 'firstName',
      },
      {
        header: this.translate.stream('tableHeader.userName'),
        field: 'username',
      },
      {
        header: this.translate.stream('tableHeader.designation'),
        field: 'designation',
      },
      {
        header: this.translate.stream('tableHeader.status'),
        field: 'isActivated',
        type: 'tag',
          tag: {
            true : { text: 'Active', color: 'green-100' },
            false: { text: 'Inactive', color: 'red-100' },
          },
      },
      {
        header: this.translate.stream('tableHeader.lastModified'),
        field: 'lastModified',
        sortable: true,
        minWidth: 120,
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

  previousState() {
    this.location.back();
  }

  getMyIndex(index: number): number {
    if (this.pageContext.page > 0) {
      return this.pageContext.page * this.pageContext.itemsPerPage + index;
    }
    return index;
  }

  create() {
    this.router.navigateByUrl('/user/create');
  }

  onSearch(reset: any) {
    if (reset) {
      this.search = {};
    }
    this.queryData();
  }
}
