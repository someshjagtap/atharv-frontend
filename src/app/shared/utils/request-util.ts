import { HttpParams } from "@angular/common/http";

export const createRequestOptionAllRecords = (req: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach(key => {
        options = options.set(key, req[key]);
    });
    if (!req.sort) {
      options = options.set('sort', 'id,asc');
    }
    if (req.page === undefined) {
      options = options.set('page', '0');
      options = options.set('size', '1000');
    }
  }else{
      options = options.set('sort', 'id,asc');
      options = options.set('page', '0');
      options = options.set('size', '1000');
  }
  return options;
};
