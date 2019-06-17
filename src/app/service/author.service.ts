import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl = 'http://localhost:8080/portfolio';

  constructor(private http: HttpClient) { }

  getAuthor(id: number) : Observable<Object>{
    return this.http.get(`${this.baseUrl}/authorInfo/${id}`);
  }

  getAllAuthors(): Observable<any>{
    // console.log("all researcher information");
    return this.http.get(`${this.baseUrl}/author`);
  }

  addAuthor(researcher : Object): Observable<Object>{
    console.log("added researcher")
    return this.http.post(`${this.baseUrl}/authorCreate`,researcher);
  }

  updateAuthor(author : Author): Observable<Object>{  //id: number, value: any
    return this.http.put(`${this.baseUrl}/authorUpdate/${author.authorId}`, author);//`${this.baseUrl}/researcherUpdate/${id}`, value
  }

  deleteAuthor(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/authorDelete/${id}`, {responseType: 'text'});
  }
}
