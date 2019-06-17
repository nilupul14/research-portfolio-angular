import { Component, OnInit } from '@angular/core';
import { ResearchPaper } from 'src/app/model/research-paper';
import { ResearchPaperService } from 'src/app/service/research-paper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-research-paper',
  templateUrl: './add-research-paper.component.html',
  styleUrls: ['./add-research-paper.component.css']
})
export class AddResearchPaperComponent implements OnInit {

  researchPaper: ResearchPaper = new ResearchPaper();
  submitted = false;

  constructor(private researchPaperService: ResearchPaperService, private router: Router) { }

  ngOnInit() {
  }

  newResearcher(): void{
    this.submitted = false;
    this.researchPaper = new ResearchPaper();
  }

  save(): void {
    this.researchPaperService.addResearchPaper(this.researchPaper)
        .subscribe( data => {
          alert("Research Paper added successfully.");
          // this.router.navigate(['researcher']);
        });

  };

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
