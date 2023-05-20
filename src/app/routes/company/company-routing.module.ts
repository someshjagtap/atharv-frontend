import { Injectable, NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { LookupService } from '@shared/services/lookup.service';
import { map, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompanyResolver implements Resolve<any> {
  constructor(private lookupService: LookupService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;

    if (id) {
      return this.lookupService.getCompany(id).pipe(map((res: HttpResponse<any>) => res.body));
    }
    return of(null);
  }
}

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
  {
    path: 'edit/:id',
    component: CreateComponent,
    resolve: {
      details: CompanyResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
