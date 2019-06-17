import { Component, OnInit } from '@angular/core';
import { ResearchPaper } from 'src/app/model/research-paper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResearchPaperService } from 'src/app/service/research-paper.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-research-paper',
  templateUrl: './edit-research-paper.component.html',
  styleUrls: ['./edit-research-paper.component.css']
})
export class EditResearchPaperComponent implements OnInit {

  form: FormGroup;
  researchPaper: ResearchPaper = new ResearchPaper();
  submitted = false;

  constructor(private researchPaperService: ResearchPaperService, private router: Router, public fbuilder: FormBuilder) { }

  ngOnInit() {
    // Build and Validate Reactive form
    let id = localStorage.getItem("editResearchPaperId");
    if(!id) {
      alert("Invalid action.")
      this.router.navigate(['researchPaper']);
      return;
    }
    this.form = this.fbuilder.group({
      researchPaperId: [],
      name: ['', Validators.required],
      publication: ['', Validators.required],
      funding: ['', Validators.required],
    });
    
    this.researchPaperService.getResearchPaper(+id)
      .subscribe( data => {
        this.form.setValue(data);
      });
  }

  newResearchPaper(): void{
    this.submitted = false;
    this.researchPaper = new ResearchPaper();
  }

  saveUpdateResearchPaper(): void {
    this.researchPaperService.updateResearchPaper(this.form.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['researchPaper']);
      },
      error => {
        alert(error);
      });

  };

  onSubmit(){
   this.submitted = true;
    this.saveUpdateResearchPaper(); 
  }
}
