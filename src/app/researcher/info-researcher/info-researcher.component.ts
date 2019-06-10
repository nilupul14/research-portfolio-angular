import { Component, OnInit, Input } from '@angular/core';
import { Researcher } from 'src/app/model/researcher';
import { ResearcherService } from 'src/app/service/researcher.service';
import { ListResearcherComponent } from '../list-researcher/list-researcher.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-researcher',
  templateUrl: './info-researcher.component.html',
  styleUrls: ['./info-researcher.component.css']
})
export class InfoResearcherComponent implements OnInit {

  @Input() researcher: Researcher;
  researchers : Observable<Researcher[]>;

  constructor(private researcherService: ResearcherService, private router: Router) { }

  ngOnInit() {

  }


   getResearcher(id: number){
    this.researcherService.getResearcher(id)
      .subscribe(
        data => {
          // this.researcher.setValue(data);
          console.log(data);
        },
        error => console.log(error));

    this.router.navigate(['/researcherInfo']);
  }

}
