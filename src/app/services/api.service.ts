import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { DashboardGridData } from '../interfaces/dashboardGrid.interface';

declare var require: any;
declare var moment: any;
const mockTableData = require('../../assets/mock/dashboard.json');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _isMock = true;
  constructor(private _http: HttpService) { }

  getTableData(): Promise<Array<DashboardGridData>> {
    if (this._isMock) {
      const modData = mockTableData.map(data => {
        data.updated_at = moment(data.updated_at).format('DD/MM/YYYY');
        return data;
      });
      return Promise.resolve(modData);
    } else {
      // need to add url for api
      return this._http.getReq('api url');
    }
  }
}
