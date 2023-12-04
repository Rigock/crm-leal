import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'https://crudcrud.com/api/934c53e898e645798d8a825de36ed41a';
  clients : any;

  constructor(
    private http: HttpClient
  ) { }

  // Create new Client //
  createClient( _client: any ): Promise<any> {
   this.clients = this.http.post(`${this.url}/clients`, _client)
    .toPromise().then ( resp => {
      return resp
    }).catch( () => {
      return null;
    })
    return  this.clients
  }
  
  // Read all clients //
  readClients(): Promise<any>  {
    return this.http.get<any>(`${this.url}/clients`).toPromise();
  }

  // Update an specific client //
  updateClient( _client: any, _id: string ): Promise <any> {
    return this.http.put(`${this.url}/clients/${_id}`, _client).toPromise();
  }
  
  // Delete an specific client //
  deleteClient( _id: string ): Promise<any> {
    return this.http.delete(`${this.url}/clients/${_id}`).toPromise();
  }

}
