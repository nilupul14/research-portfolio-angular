import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResearchPaper } from '../model/research-paper';

@Injectable({
  providedIn: 'root'
})
export class ResearchPaperService {

  private baseUrl = 'http://localhost:8080/portfolio';

  constructor(private http: HttpClient) { }

  getResearchPaper(id: number) : Observable<Object>{
    return this.http.get(`${this.baseUrl}/researchPaperInfo/${id}`);
  }

  getAllResearchPapers(): Observable<any>{
    // console.log("all researcher information");
    return this.http.get(`${this.baseUrl}/researchPaper`);
  }

  addResearchPaper(researchPaper : Object): Observable<Object>{
    console.log("added research paper")
    return this.http.post(`${this.baseUrl}/researchPaperCreate`,researchPaper);
  }

  updateResearchPaper(researchPaper : ResearchPaper): Observable<Object>{  //id: number, value: any
    return this.http.put(`${this.baseUrl}/researchPaperUpdate/${researchPaper.researchPaperId}`, researchPaper);//`${this.baseUrl}/researcherUpdate/${id}`, value
  }

  deleteResearchPaper(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/researchPaperDelete/${id}`, {responseType: 'text'});
  }
}
