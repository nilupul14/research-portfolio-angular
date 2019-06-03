import { Component, OnInit, Input } from '@angular/core';
import { Researcher } from 'src/app/model/researcher';
import { ResearcherService } from 'src/app/service/researcher.service';
import { ListResearcherComponent } from '../list-researcher/list-researcher.component';

@Component({
  selector: 'app-info-researcher',
  templateUrl: './info-researcher.component.html',
  styleUrls: ['./info-researcher.component.css']
})
export class InfoResearcherComponent implements OnInit {

  @Input() researcher: Researcher;

  constructor(private researcherService: ResearcherService, private listComponent: ListResearcherComponent) { }

  ngOnInit() {
  }

  deleteResearcher(){
    //
  }

}
