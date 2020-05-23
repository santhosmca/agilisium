import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { ApiService } from './../api.service';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { error } from 'protractor';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.scss']
})

export class ListTransactionComponent implements OnInit {


  response: [];
  displayedColumns: string[] = ['id', 'date', 'description', 'paymentMode', 'cost', 'actions'];
  dataSource;
  @ViewChild(MatSort, {}) sort: MatSort;
  @ViewChild(MatPaginator, {}) paginator: MatPaginator;
  status;
  error;
  constructor(private api: ApiService) {

  }


  ngOnInit() {
    this.refresh()
  }

  deleteTractation(id) {
    this.api.deleteTranaction(id).subscribe(
      (res: any) => {
        if (res) {
          this.status = "Transaction is Deleted";
          this.refresh();
        }
      },
      error => {
        console.log(error);
      }, () => { }
    );
  }
  refresh() {
    this.api.getTracker().subscribe(
      (res: any) => {
        if (res.length > 0) {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          } else {
          this.error = 'No Transactions found or Please start Node server cmd node index';
        }
      },
      error => {
        console.log(error);
      }, () => { }
    );
  }
  
}
