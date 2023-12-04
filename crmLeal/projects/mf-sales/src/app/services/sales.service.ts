import { Injectable } from '@angular/core';
import { ISales, periodData, single } from './data';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private data: ISales[] = single;
  private periodSales= periodData;
  multi = [
    // {
    //   "name": "epm",
    //   "series": [
    //     {
    //       "name": "2022",
    //       "value": 29381,
    //       "extra": {
    //         "code": "ms"
    //       }
    //     },
    //     {
    //       "name": "2020",
    //       "value": 13021,
    //       "extra": {
    //         "code": "ms"
    //       }
    //     }
    //   ]
    // },  
    {
      "name": "claro",
      "series": [
        {
          "name": "2022",
          "value": 40309,
          "extra": {
            "code": "ms"
          }
        },
        {
          "name": "2020",
          "value": 32196,
          "extra": {
            "code": "ms"
          }
        }
      ]
    },
  
    {
      "name": "Farmacenter",
      "series": [
        {
          "name": "2022",
          "value": 20720,
          "extra": {
            "code": "ms"
          }
        },
        {
          "name": "2020",
          "value": 15000,
          "extra": {
            "code": "ms"
          }
        }
      ]
    }
  ];
  constructor() { }

  get salesData() {
    return this.data;
  }

  randomData() {
    this.data = [
      {
        "name": "Texaco",
        "value": 109061
      },
      {
        "name": "mini so",
        "value": 83046
      },
      {
        "name": "Crepes & Waffles",
        "value": 100995
      },
      {
        "name": "dafiti",
        "value": 95207
      },
      // {
      //   "name": "epm",
      //   "value": 42402
      // },
      {
        "name": "claro",
        "value": 72505
      },
      {
        "name": "Farmacenter",
        "value": 35720
      },
    ]
  }


  get salesPeriodData() {
    return this.periodSales
  }

  // getNewClients(): Promise<any> {
  //   return
  // }
  getNewClients() {
    this.periodSales = [
      ...this.periodSales,
      ...this.multi
    ]
    // return newClients

  }

}
