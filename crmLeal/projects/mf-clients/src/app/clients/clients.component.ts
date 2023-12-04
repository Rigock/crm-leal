import { AfterViewInit, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { SharedLibService } from '@shared-lib';
import { CrudService } from '../services/crud.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';
import { MatDialog, MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent, } from '@angular/material/dialog';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['name', 'address', 'contact', 'email', 'actions'];
  dataSource = new MatTableDataSource();
  

  constructor (
    private _sharedLibService : SharedLibService,
    private _crudService: CrudService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.getClients();
  }
  
  getClients() {
    this._crudService.readClients()
    .then( resp => {
      this.dataSource = new MatTableDataSource(resp);
      this.ngAfterViewInit();
    })
  }
  
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  editClient( _client:any ){
    const id = _client._id;
    this.openDialog(_client)
    // this._crudService.updateClient(_client, id)
    // .then( resp => {
    //   this.getClients();
    // })
    console.log("Editando?: ", _client);
  }

  deleteClient( _client:any ){
    this._crudService.deleteClient( _client._id)
    .then( resp => {
      this.getClients();
    })
    console.log("Deleting?: ", _client);
  }

  
  openDialog(_client:any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: _client
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ', result);
      // this.getClients();
      // this.animal = result;
    });
  }

}
