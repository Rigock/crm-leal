import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  private _clientCreated: BehaviorSubject<any> = new BehaviorSubject([]);

  getClientCreated(): Observable<any>{
    return this._clientCreated.asObservable();
  }
  setClientCreated(_client: any){
    this._clientCreated.next(_client);
  }
  newClient$ = this._clientCreated.asObservable();

  private url = 'https://crudcrud.com/api/781dce68da3346a4b734334ba46cd6bd';
  clients : any;
  
  constructor(
    private http: HttpClient
  ) { }

  // Create new Client //
  createClient( _client: any ): Promise<any> {
   this.clients = this.http.post(`${this.url}/clients`, _client)
    .toPromise().then ( resp => {
      localStorage.setItem('client', JSON.stringify(_client));
      sessionStorage.setItem('client', JSON.stringify(_client));
      // this._clientCreated.next(localStorage.getItem('client'));
      this.setClientCreated(sessionStorage.getItem('client'));
      return resp
    }).catch( () => {
      return null;
    })
    return  this.clients
  }


}
