import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsComponent } from './clients.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SharedLibService } from '@shared-lib';
import { CrudService } from '../services/crud.service';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  let crudService: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsComponent],
      imports: [MatDialogModule, MatTableModule, MatSortModule],
      providers: [SharedLibService, CrudService]
    });

    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    crudService = TestBed.inject(CrudService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getClients on ngOnInit', () => {
    spyOn(crudService, 'readClients').and.returnValue(Promise.resolve([]));
    spyOn(component, 'getClients').and.callThrough();
    component.ngOnInit();
    expect(component.getClients).toHaveBeenCalled();
  });

  it('should call getClients on deleteClient', () => {
    spyOn(crudService, 'deleteClient').and.returnValue(Promise.resolve({}));
    spyOn(component, 'getClients').and.callThrough();
    const client = { _id: '656e3982b34d0a03e8f525c3' };
    component.deleteClient(client);
    expect(component.getClients).toHaveBeenCalled();
  });
});