import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Tables } from '../models/tables';
@Injectable({
  providedIn: 'root'
})
export class TablesService {

  URL_API = 'http://localhost:4000/api/tables';
  
  tables: Tables[] | undefined;
  
  constructor(private http: HttpClient) {
   }

  getTables() {
    return this.http.get<Tables[]>(this.URL_API)
  }
}
