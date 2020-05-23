import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API = 'http://localhost:3000/';

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });
   options = {
    headers: this.httpHeaders
  };

  constructor(private http: HttpClient) { }
  getTracker(): Observable<[]> {
    return this.http.get<[]>(this.API + 'walleTracker');
  }
  postTranaction(qparams): Observable<[]> {
    return this.http.post<[]>(this.API + 'walleTracker', JSON.stringify(qparams), this.options);
  }
  updateTranaction(qparams): Observable<[]> {
    return this.http.put<[]>(this.API + `walleTracker/${qparams.id}`, JSON.stringify(qparams), this.options);
  }
  deleteTranaction(qparams: any): Observable<[]> {
   return this.http.delete<[]>(this.API + `walleTracker/${qparams}`);
  }
  getTranaction(qparams: any): Observable<[]> {
    return this.http.get<[]>(this.API + `walleTracker/${qparams}`);
   }
}
