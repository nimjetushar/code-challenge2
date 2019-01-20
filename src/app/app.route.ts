import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    { path: 'dashboard', component: TableComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

export default routes;
