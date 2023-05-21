import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { AuthGuard } from '@core';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
      {
        path: 'store',
        loadChildren: () => import('./store/store.module').then(m => m.StoreModule),
      },
      {
        path: 'purchase',
        loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule),
      },
      {
        path: 'branch',
        loadChildren: () => import('./branch/branch.module').then(m => m.BranchModule),
      },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      {
        path: 'stock',
        loadChildren: () => import('./stock/stock.module').then(m => m.StockModule),
      },
      {
        path: 'company',
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
      },
      {
        path: 'parameterLookup',
        loadChildren: () =>
          import('./parameter-lookup/parameter-lookup.module').then(m => m.ParameterLookupModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
