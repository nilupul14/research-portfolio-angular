import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResearcherService } from 'src/app/service/researcher.service';
import { Researcher } from 'src/app/model/researcher';

@Component({
  selector: 'app-edit-researcher',
  templateUrl: './edit-researcher.component.html',
  styleUrls: ['./edit-researcher.component.css']
})
export class EditResearcherComponent implements OnInit {

  researcher: Researcher = new Researcher();
  submitted = false;

  constructor(private researcherService: ResearcherService, private router: Router) { }

  ngOnInit() {
  }

  newResearcher(): void{
    this.submitted = false;
    this.researcher = new Researcher();
  }

  save(): void {
    this.researcherService.addResearcher(this.researcher)
        .subscribe( data => {
          alert("User created successfully.");
          // this.router.navigate(['researcher']);
        });

  };

  onSubmit(){
    this.submitted = true;
    this.save();
  }
}
