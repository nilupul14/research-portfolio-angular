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

  // update(){
  //   this.researcherService.updateResearcher(id,value)
  //   .subscribe( data => {
  //     this.researchers = data;
  //     this.router.navigate(['/researcherUpdate']);
  //   });
  // }
  updateResearcher(id : number, value: any){
    // this.researcherService.updateResearcher(researcher.id, researcher.value)
    // .subscribe(data => {
    //   this.researchers = this.researchers.(researcher);
    // });
    // this.researcherService.updateResearcher(researchers)
    this.router.navigate(['/researcherUpdate']);
  }

}
