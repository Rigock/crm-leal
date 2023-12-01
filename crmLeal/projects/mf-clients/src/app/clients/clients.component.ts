import { Component } from '@angular/core';
import { SharedLibService } from '@shared-lib';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  constructor (
    private _sharedLibService : SharedLibService
  ){}

}
