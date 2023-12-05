import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientFormComponent } from './client-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import { SharedLibService } from '@shared-lib';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let fixture: ComponentFixture<ClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ClientFormComponent],
      providers: [CrudService, SharedLibService]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should call createClient and emit event', () => {
    spyOn(component['_sharedLibService'], 'createClient').and.returnValue(Promise.resolve({}));
    spyOn(component.clientSetted, 'emit');
  
    const clientData = {name: 'Brisa', contact: '6867646566', address: 'Aguas Claras', email: 'agua@brisa.co'};
    component.createClient(clientData);
  
    fixture.whenStable().then(() => {
      expect(component['_sharedLibService'].createClient).toHaveBeenCalledWith(clientData);
      expect(component.clientSetted.emit).toHaveBeenCalledWith(clientData);
    });
  });
  
  it('should call updateClient and emit event', () => {
    spyOn(component['_crudService'], 'updateClient').and.returnValue(Promise.resolve({}));
    spyOn(component.clientSetted, 'emit');
  
    const editClientData = {name: 'Brisa', contact: '6867646566', address: 'Aguas Oscuras', email: 'agua@brisa.co'};
    component.modalEditData = { _id: '123' };
    component.editClient(editClientData);
  
    fixture.whenStable().then(() => {
      expect(component['_crudService'].updateClient).toHaveBeenCalledWith(editClientData, '123');
      expect(component.clientSetted.emit).toHaveBeenCalledWith(editClientData);
    });
  });

  it('should set form values on setForm', () => {
    const testData = { name: 'John', contact: '1234567890', address: 'Some address', email: 'john@example.com' };
    component.setForm(testData);
  
    expect(component.formClient.value).toEqual(testData);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render the form with expected elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('[formControlName="name"]')).toBeTruthy();
  });
});
