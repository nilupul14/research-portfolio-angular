import { Component, OnInit, Input } from '@angular/core';
import { Researcher } from 'src/app/model/researcher';
import { ResearcherService } from 'src/app/service/researcher.service';
import { ListResearcherComponent } from '../list-researcher/list-researcher.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-researcher',
  templateUrl: './info-researcher.component.html',
  styleUrls: ['./info-researcher.component.css']
})
export class InfoResearcherComponent implements OnInit {

  // @Input() researcher: Researcher;
  // researchers : Observable<Researcher[]>;
  researchers: Researcher = new Researcher();
  form: FormGroup;
  constructor(private researcherService: ResearcherService, private router: Router) { }

  ngOnInit() {

    let id = localStorage.getItem("viewResearcherId");
    this.researcherService.getResearcher(+id)
    .subscribe( data => {
      this.form.setValue(data);
    });
  }

  newResearcher(): void{
    // this.submitted = false;
    this.researchers = new Researcher();
  }

  //  reloadData(){
  //   this.researcherService.getResearcher(id)
  //     .subscribe(
  //       data => {
  //         this.researchers = data;
  //         console.log(data);
  //       },
  //       error => console.log(error));

  //   this.router.navigate(['/researcher']);
  // }
}
