import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fund } from 'src/app/model/fund';
import { Router } from '@angular/router';
import { FundService } from 'src/app/service/fund.service';

@Component({
  selector: 'app-list-fund',
  templateUrl: './list-fund.component.html',
  styleUrls: ['./list-fund.component.css']
})
export class ListFundComponent implements OnInit {

  funds : Observable<Fund[]>;

  constructor(private fundService : FundService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  };

  reloadData(){
   this.fundService.getAllFunds()
   .subscribe( data => {
    this.funds = data;
    });
  };

  deleteFund(id : number){
    this.fundService.deleteFund(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  };

  updateFund(funds : Fund){
    localStorage.removeItem("editFundId");
    localStorage.setItem("editFundId", funds.fundId.toString());
    this.router.navigate(['/fundUpdate']);
  }

  getFund(id: number){
    this.router.navigate(['/researcherInfo']);
  }

}
