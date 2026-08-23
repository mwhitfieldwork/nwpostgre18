import { Routes } from '@angular/router';

import { LoginComponent } from './northwind-ui/login/login.component';
import { DashComponent } from './northwind-ui/dash/dash.component';
import { CalculatorComponent } from './northwind-ui/calculator/calculator.component';
import { EmployeesComponent } from './northwind-ui/employees/employees.component';
import { StockInventoryComponent } from './northwind-ui/products/stock-inventory/stock-inventory.component';
import { ProductTableComponent } from './northwind-ui/products/product-table/product-table.component';
import { ProductTableDetailComponent } from './northwind-ui/products/product-table/product-table-detail/product-table-detail.component';
import { TodoComponent } from './northwind-ui/todo/todo.component';

import { Error404Component } from './shared/error/error404/error404.component';
import { Error500Component } from './shared/error/error500/error500.component';

import { DashboardResolver } from './utilities/resolvers/dashboard-resolver.resolver';
import { CalculateGuard } from './utilities/guards/calculate.guard';

export const routes: Routes = [

  // Default route → login
  { path: '', component: LoginComponent },

  // Dashboard (resolver made safe in code)
  { 
    path: 'dashboard', 
    component: DashComponent,
    resolve: { data: DashboardResolver }
  },

  // Calculator (guard made safe in code)
  { 
    path: 'calc', 
    component: CalculatorComponent, 
    canActivate: [CalculateGuard] 
  },

  // Employees
  { path: 'work', component: EmployeesComponent },

  // Stock
  { path: 'stock', component: StockInventoryComponent },

  // Todo
  { path: 'todo', component: TodoComponent },

  // Products + children
  { 
    path: 'products', 
    component: ProductTableComponent,
    children: [
      { path: 'details/new', component: ProductTableDetailComponent },
      { path: 'details/:id', component: ProductTableDetailComponent }
    ]
  },

  // Error pages (NO GUARDS)
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },

  // Wildcard → 404 (NOT dashboard)
  { path: '**', component: Error404Component }
];