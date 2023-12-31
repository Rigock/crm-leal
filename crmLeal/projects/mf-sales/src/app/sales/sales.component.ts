import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service';
import { SharedLibService } from '@shared-lib';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent  implements OnInit{

  unsubscribe$: Subject<boolean> = new Subject();
  
  view: [number, number] = [900, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  // options horizontal bar chart
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradientH: boolean = false;
  showLegendH: boolean = true;
  legendPosition: any = 'right';
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Clientes';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Ventas';
  schemeType: any = 'ordinal';

  constructor(
    private _salesService : SalesService,
    private _sharedLibService : SharedLibService,
  ) {}

  
  ngOnInit(): void {
    this._sharedLibService.getClientCreated()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((resp) => {
      console.log('LIB response from SALES: ', resp);
    })
  }

  get single() {
    return this._salesService.salesData;
  }

  get horizontalChart() {
    return  this._salesService.salesPeriodData;
  }

  refreshData() {
    this._salesService.randomData();
    this._salesService.getNewClients();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
