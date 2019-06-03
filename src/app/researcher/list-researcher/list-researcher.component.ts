import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Researcher } from 'src/app/model/researcher';
import { ResearcherService } from 'src/app/service/researcher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-researcher',
  templateUrl: './list-researcher.component.html',
  styleUrls: ['./list-researcher.component.css']
})
export class ListResearcherComponent implements OnInit {

  researchers : Observable<Researcher[]>;

  constructor(private researcherService : ResearcherService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  };

  reloadData(){

   this.researcherService.getAllResearchers()
   .subscribe( data => {
    this.researchers = data;
    });
  };

  deleteResearcher(id : number){
    this.researcherService.deleteResearcher(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };

  // deleteResearcher(researcher: Researcher): void {
  //   this.researcherService.deleteResearcher(researcher.id)
  //     .subscribe( data => {
  //       this.researchers = this.researchers.(researcher);
  //     })
  // };
}
