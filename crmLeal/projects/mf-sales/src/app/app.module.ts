import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
    BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
