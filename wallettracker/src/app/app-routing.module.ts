import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTransactionComponent } from '../app/list-transaction/list-transaction.component';
import { EditTransactionComponent } from '../app/edit-transaction/edit-transaction.component';
import { AddTransactionComponent } from '../app/add-transaction/add-transaction.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: ListTransactionComponent,
  },
  {

    path: 'add-transaction',
    component: AddTransactionComponent
  },
  {
    path: 'edit-transaction/:id',
    component: EditTransactionComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
