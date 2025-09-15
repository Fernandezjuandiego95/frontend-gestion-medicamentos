import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  baseUrl = 'http://localhost/sistema_gestion/public/';
  constructor(private http: HttpClient) { }
  get(action: string) { return this.http.get<any>(`${this.baseUrl}?action=${action}`); }
  post(action: string, body: any) { return this.http.post<any>(`${this.baseUrl}?action=${action}`, body); }
}
