import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { ApiService } from './../api.service';
import { Observable } from 'rxjs';


import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent implements OnInit {
  transactionForm = new FormGroup({
    id: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl(''),
    paymentMode: new FormControl(''),
    cost: new FormControl(''),
  });
  status;
  constructor(private router: Router,private route: ActivatedRoute,private api: ApiService) { }

  ngOnInit() {

      
    this.route.paramMap.subscribe(
      params => {

    this.api.getTranaction(params.get("id")).subscribe(
      (res: any) => {
        if (res) {
       
          this.transactionForm.controls.id.setValue(res.id);
          this.transactionForm.controls.date.setValue(res.date);
          this.transactionForm.controls.description.setValue(res.description);
          this.transactionForm.controls.paymentMode.setValue(res.paymentMode);
          this.transactionForm.controls.cost.setValue(res.cost);

        }
      },
      error => {
        console.log(error);
      }, () => { }
    );
 });   
  }
  onSubmit() {    
    this.api.updateTranaction(this.transactionForm.value).subscribe(
      (res: any) => {
        if (res.id) {         
          this.status = "Transaction is updated";
        }
      },
      error => {
        console.log(error);
      }, () => { }
    );  
}

}