import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  private _patronObserver = new BehaviorSubject<number>(0);
  algoQueObservar$ = this._patronObserver.asObservable();

}
