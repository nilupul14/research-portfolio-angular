import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../model/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseUrl = 'http://localhost:8080/portfolio';

  constructor(private http: HttpClient) { }

  getPublication(id: number) : Observable<Object>{
    return this.http.get(`${this.baseUrl}/publicationInfo/${id}`);
  }

  getAllPublications(): Observable<any>{
    return this.http.get(`${this.baseUrl}/publication`);
  }

  addPublication(publication : Object): Observable<Object>{
    console.log("added publication")
    return this.http.post(`${this.baseUrl}/publicationCreate`,publication);
  }

  updatePublication(publication : Publication): Observable<Object>{  //id: number, value: any
    return this.http.put(`${this.baseUrl}/publicationUpdate/${publication.publicationId}`, publication);//`${this.baseUrl}/researcherUpdate/${id}`, value
  }

  deletePublication(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/publicationDelete/${id}`, {responseType: 'text'});
  }
}
