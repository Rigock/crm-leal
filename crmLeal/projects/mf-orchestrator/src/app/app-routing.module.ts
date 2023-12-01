import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('mfClients/ClientsModule')
    .then( (m) => m.ClientsModule )
  },
  {
    path:'sales',
    loadChildren: () => import('mfSales/SalesComponent')
    .then( (m) => m.SalesComponent )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
