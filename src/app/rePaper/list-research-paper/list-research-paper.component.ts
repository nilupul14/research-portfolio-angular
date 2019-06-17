import { Component, OnInit } from '@angular/core';
import { ResearchPaperService } from 'src/app/service/research-paper.service';
import { Observable } from 'rxjs';
import { ResearchPaper } from 'src/app/model/research-paper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-research-paper',
  templateUrl: './list-research-paper.component.html',
  styleUrls: ['./list-research-paper.component.css']
})
export class ListResearchPaperComponent implements OnInit {

  researchPaper : Observable<ResearchPaper[]>;

  constructor(private researchPaperService : ResearchPaperService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  };

  reloadData(){

   this.researchPaperService.getAllResearchPapers()
   .subscribe( data => {
    this.researchPaper = data;
    });
  };

  deleteResearchPaper(id : number){
    this.researchPaperService.deleteResearchPaper(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };

  updateResearchPaper(researchPaper : ResearchPaper){

    localStorage.removeItem("editResearchPaperId");
    localStorage.setItem("editResearchPaperId", researchPaper.researchPaperId.toString());
    this.router.navigate(['/researchPaperUpdate']);
  }

  getResearchPaper(researchPaperId: number){
    this.router.navigate(['/researchPaperInfo']);
  }
}
