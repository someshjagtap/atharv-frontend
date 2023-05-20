import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private SERVER_API_URL = environment.serviceUrl;
  constructor(private http: HttpClient) { }

  createCompany(req: any): Observable<HttpResponse<any>> {
    return this.http
      .post<any>(this.SERVER_API_URL + '/posts', req, {
        observe: 'response',
      })
      .pipe(map((res: HttpResponse<any>) => res));
  }

  updateCompany(obj: any): Observable<HttpResponse<any>> {
    return this.http
      .put<any>(this.SERVER_API_URL + '/posts/' + obj.id, obj, {
        observe: 'response',
      })
      .pipe(map((res: HttpResponse<any>) => res));
  }
}
