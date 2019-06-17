import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResearcherService } from 'src/app/service/researcher.service';
import { Researcher } from 'src/app/model/researcher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-researcher',
  templateUrl: './edit-researcher.component.html',
  styleUrls: ['./edit-researcher.component.css']
})
export class EditResearcherComponent implements OnInit {

  form: FormGroup;
  researcher: Researcher = new Researcher();
  submitted = false;

  constructor(private researcherService: ResearcherService, private router: Router, public fbuilder: FormBuilder) { }

  ngOnInit() {
    // Build and Validate Reactive form
    let id = localStorage.getItem("editResearcherId");
    if(!id) {
      alert("Invalid action.")
      this.router.navigate(['researcher']);
      return;
    }
    this.form = this.fbuilder.group({
      id: [],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      faculty: ['', Validators.required],
      university: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
    });
    
    this.researcherService.getResearcher(+id)
      .subscribe( data => {
        this.form.setValue(data);
      });
  }

  newResearcher(): void{
    this.submitted = false;
    this.researcher = new Researcher();
  }

  saveUpdateResearcher(): void {
    this.researcherService.updateResearcher(this.form.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['researcher']);
      },
      error => {
        alert(error);
      });

  };

  onSubmit(){
   this.submitted = true;
    this.saveUpdateResearcher(); 
  }
}

/* https://www.devglan.com/angular/angular-6-example 
    refer for update function
*/
