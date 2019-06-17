import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/service/author.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  form: FormGroup;
  author: Author = new Author();
  submitted = false;

  constructor(private authorService: AuthorService, private router: Router, public fbuilder: FormBuilder) { }

  ngOnInit() {
    // Build and Validate Reactive form
    let id = localStorage.getItem("editAuthorId");
    if(!id) {
      alert("Invalid action.")
      this.router.navigate(['author']);
      return;
    }
    this.form = this.fbuilder.group({
      authorId: [],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      faculty: ['', Validators.required],
      university: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
    });
    
    this.authorService.getAuthor(+id)
      .subscribe( data => {
        this.form.setValue(data);
      });
  }

  newAuthor(): void{
    this.submitted = false;
    this.author = new Author();
  }

  saveUpdateAuthor(): void {
    this.authorService.updateAuthor(this.form.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['author']);
      },
      error => {
        alert(error);
      });

  };

  onSubmit(){
   this.submitted = true;
    this.saveUpdateAuthor(); 
  }
}
