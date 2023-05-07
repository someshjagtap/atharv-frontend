import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createRequestOptionAllRecords } from '@shared/utils/request-util';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }

  checkParameterType(req: any) {
    return createRequestOptionAllRecords(req);
  }

}
