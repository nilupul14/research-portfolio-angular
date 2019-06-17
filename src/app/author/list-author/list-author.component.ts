import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author';
import { Observable } from 'rxjs';
import { AuthorService } from 'src/app/service/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {
  
  authors : Observable<Author[]>;

  constructor(private authorService : AuthorService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  };

  reloadData(){
   this.authorService.getAllAuthors()
   .subscribe( data => {
    this.authors = data;
    });
  };

  deleteAuthor(id : number){
    this.authorService.deleteAuthor(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };

  updateAuthor(author : Author){
    localStorage.removeItem("editAuthorId");
    localStorage.setItem("editAuthorId", author.authorId.toString());
    this.router.navigate(['/authorUpdate']);
  }

  getAuthor(id: number){
    this.router.navigate(['/authorInfo']);
  }
}
