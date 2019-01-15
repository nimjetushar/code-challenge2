import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';

import { DashboardGridData, TableColumns, Tabs } from './../interfaces/dashboardGrid.interface';
import { TableModel } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tabList: Array<Tabs>;
  currTab: number;
  columns: Array<TableColumns>;
  tableData: Array<DashboardGridData>;

  private _tableModel: TableModel;

  constructor(private _apiService: ApiService) {

    this.tabList = [
      { label: 'Monthly', key: 0 },
      { label: 'Quatarly', key: 1 },
      { label: 'Annual', key: 2 }
    ];

    this.currTab = this.tabList[0].key;
  }

  ngOnInit() {
    this._tableModel = new TableModel();

    this.columns = this._tableModel.getTableProps();
    this.fetchTableData();
  }

  fetchTableData(): void {
    this._apiService.getTableData().then(res => {
      this.tableData = res;
    });
  }

  selectTab(tab: Tabs): void {
    this.currTab = tab.key;

    // need to write logic to change data wrt the selected tab
  }

}
