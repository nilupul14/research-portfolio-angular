import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FundService } from 'src/app/service/fund.service';
import { Fund } from 'src/app/model/fund';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-fund',
  templateUrl: './edit-fund.component.html',
  styleUrls: ['./edit-fund.component.css']
})
export class EditFundComponent implements OnInit {

  forms: FormGroup;
  fund: Fund = new Fund();
  submitted = false;

  constructor(private fundService: FundService, private router: Router, public fbuilder: FormBuilder) { }

  ngOnInit() {
    // Build and Validate Reactive form
    let id = localStorage.getItem("editFundId");
    if(!id) {
      alert("Invalid action.")
      this.router.navigate(['fund']);
      return;
    }
    this.forms = this.fbuilder.group({
      fundId: [],
      name: ['', Validators.required],
      amount: ['', Validators.required],
    });
    
    this.fundService.getFund(+id)
      .subscribe( data => {
        this.forms.setValue(data);
      });
  }

  newFund(): void{
    this.submitted = false;
    this.fund = new Fund();
  }

  saveUpdateFund(): void {
    this.fundService.updateFund(this.forms.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['fund']);
      },
      error => {
        alert(error);
      });

  };

  onSubmit(){
   this.submitted = true;
    this.saveUpdateFund(); 
  }
}
