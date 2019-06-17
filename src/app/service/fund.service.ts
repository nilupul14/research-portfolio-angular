import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fund } from '../model/fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private baseUrl = 'http://localhost:8080/portfolio';

  constructor(private http: HttpClient) { }

  getFund(id: number) : Observable<Object>{
    return this.http.get(`${this.baseUrl}/fundInfo/${id}`);
  }

  getAllFunds(): Observable<any>{
    // console.log("all researcher information");
    return this.http.get(`${this.baseUrl}/fund`);
  }

  addFund(fund : Object): Observable<Object>{
    console.log("added fund")
    return this.http.post(`${this.baseUrl}/fundCreate`,fund);
  }

  updateFund(fund : Fund): Observable<Object>{  //id: number, value: any
    return this.http.put(`${this.baseUrl}/fundUpdate/${fund.fundId}`, fund);//`${this.baseUrl}/researcherUpdate/${id}`, value
  }

  deleteFund(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/fundDelete/${id}`, {responseType: 'text'});
  }
}
