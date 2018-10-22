import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewOrderComponent } from './order/add-order/add-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { EditOrderResolver } from './order/edit-order/edit-order.resolver';
import { ChartComponent } from './chart/chart.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-order', component: NewOrderComponent },
  { path: 'chart', component: ChartComponent},
  { path: 'details/:id', component: EditOrderComponent, resolve:{data : EditOrderResolver}} //point order
  
];
