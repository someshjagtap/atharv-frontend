import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { createRequestOptionAllRecords } from '@shared/utils/request-util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  private SERVER_API_URL = environment.serviceUrl;
  constructor(private http: HttpClient) { }

  checkParameterType(req: any) {
    return createRequestOptionAllRecords(req);
  }

  queryCompany(req?: any): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.SERVER_API_URL + '/posts', {
      params: this.checkParameterType(req),
      observe: 'response',
    });
  }

  getCompany(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.SERVER_API_URL + '/posts/' + id, {
      observe: 'response',
    });
  }

}
