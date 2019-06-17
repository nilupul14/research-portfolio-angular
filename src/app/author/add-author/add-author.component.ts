import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/service/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  author: Author = new Author();
  submitted = false;

  constructor(private authorService : AuthorService, private router : Router) { }

  ngOnInit() {
  }
  
  newAuthor() : void{
    this.submitted = false;
    this.author = new Author();
  }

  save() : void{
    this.authorService.addAuthor(this.author)
        .subscribe(data => {
          alert("Created New Author Successfully.");
          this.router.navigate(['author']);
        });
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }
}
