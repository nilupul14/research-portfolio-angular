import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Researcher } from '../model/researcher';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ResearcherService {

  private baseUrl = 'http://localhost:8080/portfolio';

  constructor(private http: HttpClient) { }

  getResearcher(id: number) : Observable<Object>{
    return this.http.get(`${this.baseUrl}/researcherInfo/${id}`);
  }

  getAllResearchers(): Observable<any>{
    // console.log("all researcher information");
    return this.http.get(`${this.baseUrl}/researcher`);
  }

  addResearcher(researcher : Object): Observable<Object>{
    console.log("added researcher")
    return this.http.post(`${this.baseUrl}/researcherCreate`,researcher);
  }

  updateResearcher(researcher : Researcher): Observable<Object>{  //id: number, value: any
    return this.http.put(`${this.baseUrl}/researcherUpdate/${researcher.id}`, researcher);//`${this.baseUrl}/researcherUpdate/${id}`, value
  }

  deleteResearcher(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/researcherDelete/${id}`, {responseType: 'text'});
  }
}
