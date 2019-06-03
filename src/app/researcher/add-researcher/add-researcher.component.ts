import { Component, OnInit } from '@angular/core';
import { Researcher } from 'src/app/model/researcher';
import { ResearcherService } from 'src/app/service/researcher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-researcher',
  templateUrl: './add-researcher.component.html',
  styleUrls: ['./add-researcher.component.css']
})
export class AddResearcherComponent implements OnInit {

  researcher: Researcher = new Researcher();
  submitted = false;

  constructor(private researcherService: ResearcherService, private router: Router) { }

  ngOnInit() {
  }

  newResearcher(): void{
    this.submitted = false;
    this.researcher = new Researcher();
  }

  // save(){
  //   // this.researcherService.addResearcher(this.researcher)
  //   //   .subscribe(data => console.log(data), error => console.log(error));
  //   // this.researcher = new Researcher();

  // }
  save(): void {
    this.researcherService.addResearcher(this.researcher)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

  onSubmit(){
    this.submitted = true;
    this.save();
  }
}
