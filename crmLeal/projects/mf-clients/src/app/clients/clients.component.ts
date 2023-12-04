import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SharedLibService } from '@shared-lib';
import { CrudService } from '../services/crud.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

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

  deleteClient( _client:any ){
    this._crudService.deleteClient( _client._id)
    .then( resp => {
      this.getClients();
    })
  }

  
  openDialog(_client:any): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: _client
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
