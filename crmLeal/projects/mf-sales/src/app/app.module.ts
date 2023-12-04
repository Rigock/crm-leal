import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module')
    .then( m => m.SalesModule)
  },
  {
    path: '',
    redirectTo: 'sales',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'sales',
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
