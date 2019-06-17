import { Component, OnInit } from '@angular/core';
import { Fund } from 'src/app/model/fund';
import { FundService } from 'src/app/service/fund.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fund',
  templateUrl: './add-fund.component.html',
  styleUrls: ['./add-fund.component.css']
})
export class AddFundComponent implements OnInit {
  funds: Fund = new Fund();
  submitted = false;

  constructor(private fundService: FundService, private router: Router) { }

  ngOnInit() {
  }

  newResearcher(): void{
    this.submitted = false;
    this.funds = new Fund();
  }

  save(): void {
    this.fundService.addFund(this.funds)
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
